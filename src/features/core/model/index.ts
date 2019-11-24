import { createStore } from 'effector'
import { setPageSetting } from './events'
import { IPageSettings } from '../types'

export const DEFAULT_PROJECT_NAME = '@mabunny repo'

const $pageSettings = createStore<IPageSettings>({

})

$pageSettings.on(
  setPageSetting, (state, payload) => ({
    ...state,
    ...payload
  })
)

export {
  $pageSettings,
  setPageSetting
}
