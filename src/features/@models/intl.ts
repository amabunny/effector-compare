import { selfApi } from 'api'
import { IDictionary } from 'features/@core'

export interface IntlLoadLocalization {
  localeCode: string
}

const loadLocalization = ({ localeCode }: IntlLoadLocalization) => {
  return selfApi.get<IDictionary<string>>(`locales/${localeCode}.json`)
}

export const intlModel = {
  loadLocalization
}
