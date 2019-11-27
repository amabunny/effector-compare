import { createStore} from 'effector'
import { createDataStore, IDictionary } from 'features/@core'
import { intlModel } from 'features/@models'
import { changeLocale } from './events'
import { availableLocales } from '../types'

const initialValue: IDictionary<string> = {}

const { $store, loadData } = createDataStore({
  initialValue,
  loadData: async (localeCode: string) => {
    const { data } = await intlModel.loadLocalization({ localeCode })
    return data
  }
})

const $locale = createStore<null | availableLocales>(null)

$locale
  .on(changeLocale, (_, locale) => locale)

$locale.watch(localeCode => {
  if (localeCode !== null) {
    loadData(localeCode)
  }
})

export {
  $store as $intl,
  loadData as loadIntlData,
  $locale,
  changeLocale
}
