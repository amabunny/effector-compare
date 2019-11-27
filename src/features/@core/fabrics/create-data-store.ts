import { createStore, createEffect } from 'effector'

interface IData<T> {
  loading: boolean
  data: T
  error: string | null
}

interface ICreateDataStore<T, LoadDataParams> {
  initialValue: T
  loadData: (params: LoadDataParams) => Promise<T>
}

export const createDataStore = <
  Type,
  LoadDataParams
>({ initialValue, ...eachParams }: ICreateDataStore<Type, LoadDataParams>) => {
  const initialState: IData<Type> = {
    loading: false,
    data: initialValue,
    error: null
  }

  const loadData = createEffect({
    handler: eachParams.loadData
  })

  const $store = createStore(initialState)

  $store
    .on(
      loadData.pending, (state, loading) => ({
        ...state,
        loading
      })
    )
    .on(
      loadData.done, (state, { result }) => ({
        ...state,
        data: result,
        error: null
      })
    )
    .on(
      loadData.fail, (state, { error }) => ({
        ...state,
        error: error.message
      })
    )

  return {
    $store,
    loadData
  }
}
