import { createStore, combine } from 'effector'
import moment from 'moment'
import { loadTasks } from './effects'
import {
  addTask,
  addTaskWithDetails,
  deleteTask,
  toggleTodoDone,
  toggleTodoDoneWithDetails,
  setParams
} from './events'
import { ITodosState, TodoFilterTypes, IParams } from '../types'
import { tasksApi } from 'api'

const initialState: ITodosState = {
  loading: false,
  data: []
}

const $todos = createStore(initialState)

$todos
  .on(
    loadTasks, (state) => ({
      ...state,
      loading: true
    })
  )
  .on(
    loadTasks.done, (state, { result }) => ({
      ...state,
      data: result
    })
  )
  .on(
    loadTasks.fail, (state) => ({
      ...state,
      data: []
    })
  )
  .on(
    loadTasks.finally, (state) => ({
      ...state,
      loading: false,
      initialized: true
    })
  )
  .on(
    addTaskWithDetails, (state, payload) => ({
      ...state,
      data: [
        ...state.data,
        payload
      ]
    })
  )
  .on(
    deleteTask, (state, { taskTimestamp }) => ({
      ...state,
      data: state.data.filter(task => task.timestamp !== taskTimestamp)
    })
  )
  .on(
    toggleTodoDoneWithDetails, (state, { todoTimestamp, doneTimestamp, flag }) => ({
      ...state,
      data: state.data.map(todo => {
        if (todo.timestamp === todoTimestamp) {
          return {
            ...todo,
            isDone: flag,
            doneTimestamp
          }
        }

        return todo
      })
    })
  )

const initialParamsState: IParams = {
  dates: [
    moment().add(-1, 'week').startOf('week').startOf('day'),
    moment().endOf('week').endOf('day')
  ],
  filterString: '',
  filterType: TodoFilterTypes.allTasks,
  initialized: false
}

const $params = createStore(initialParamsState)

$params.on(setParams, (state, params) => ({
  ...state,
  ...params
}))

const $reversedTodos = $todos.map(state =>
  [...state.data].reverse()
)

const $preparedTodos = combine($reversedTodos, $params, (reversedTodos, { filterType, filterString, dates }) => {
  let preparedTodos = [...reversedTodos]

  switch (filterType) {
    case TodoFilterTypes.justDoneTasks:
      preparedTodos = preparedTodos.filter(todo => todo.isDone)
      break

    case TodoFilterTypes.justUndoneTasks:
      preparedTodos = preparedTodos.filter(todo => !todo.isDone)
      break
  }

  if (dates) {
    preparedTodos = preparedTodos.filter(item => {
      const itemMomentDate = moment(item.timestamp).startOf('day')
      const [startPeriod, endPeriod] = dates

      const itemDateMoreThanStartPeriod =  itemMomentDate.unix() >= startPeriod.unix()
      const itemDateLessThanEndPeriod = itemMomentDate.unix() <= endPeriod.unix()

      if (itemDateMoreThanStartPeriod && itemDateLessThanEndPeriod) {
        return true
      }

      return false
    })
  }

  if (filterString) {
    preparedTodos = preparedTodos.filter(todo =>
      todo.description.toUpperCase().includes(
        filterString.toUpperCase()
      )
    )
  }

  return preparedTodos
})

/*
  1. Save using forward. Better for functional programming

  forward({
    from: addTaskWithDetails,
    to: saveEvent
  })

  forward({
    from: deleteTask,
    to: saveEvent
  })

  forward({
    from: toggleTodoDoneWithDetails,
    to: saveEvent
  })

  sample($todos, saveEvent, state => state.data).watch(data => {
    tasksApi.save(data)
  })

  2. It also can be untyped merge

  const updated = merge([ addTaskWithDetails, deleteTask, toggleTodoDoneWithDetails ])

  sample($todos, updated, state => state.data).watch(data => {
    tasksApi.save(data)
  })
*/

const $todosAndInitialized = combine($todos, $params, ({ data }, { initialized }) => ({
  data,
  initialized
}))

$todosAndInitialized.watch(({ data, initialized }) => {
  if (!initialized) { return }

  tasksApi.save(data)
})

addTask.watch(payload => {
  addTaskWithDetails({
    ...payload,
    isDone: false,
    timestamp: new Date().getTime()
  })
})

toggleTodoDone.watch(payload => {
  const { flag } = payload

  const doneTimestamp = flag
    ? new Date().getTime()
    : undefined

  toggleTodoDoneWithDetails({
    ...payload,
    doneTimestamp
  })
})

export {
  $todos,
  $preparedTodos,
  $params,
  addTask,
  deleteTask,
  toggleTodoDone,
  loadTasks,
  setParams
}
