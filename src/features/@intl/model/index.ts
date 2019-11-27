import { createStore} from 'effector'
import { ValidationError } from 'typed-contracts'
import { createDataStore, IDictionary, ls } from 'features/@core'
import { intlModel } from 'features/@models'
import { changeLocale } from './events'
import { AvailableLocales } from '../types'
import { availableLocalesContract } from './contracts'

const LOCALE_KEY = ls.getKey({ type: 'LOCALE' })

const initialValue: IDictionary<string> = {}

const { $store, loadData } = createDataStore({
  initialValue,
  loadData: async (localeCode: string) => {
    const { data } = await intlModel.loadLocalization({ localeCode })
    return data
  }
})

const $locale = createStore<null | AvailableLocales>(null)

$locale
  .on(changeLocale, (_, locale) => locale)

$locale.watch(localeCode => {
  if (localeCode !== null) {
    loadData(localeCode)
    localStorage.setItem(LOCALE_KEY, localeCode)
  }
})

const persistedLocale = localStorage.getItem(LOCALE_KEY)

if (persistedLocale) {
  const persistedDataContract = availableLocalesContract('persistedData')
  const valid = persistedDataContract(persistedLocale)

  if (!(valid instanceof ValidationError)) {
    changeLocale(valid)
  } else {
    localStorage.removeItem(LOCALE_KEY)
  }
}

export {
  $store as $intl,
  loadData as loadIntlData,
  $locale,
  changeLocale
}
