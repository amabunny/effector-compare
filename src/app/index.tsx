import React, { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import getUserLocale from 'get-user-locale'
import { useStore } from 'effector-react'
import { $locale, $intl, changeLocale, AvailableLocales } from 'features/@intl'
import { Router } from './router'

export const App = () => {
  const intl = useStore($intl)
  const locale = useStore($locale)

  useEffect(
    () => {
      if (!locale) {
        const userLocale = getUserLocale()

        if (Object.values(AvailableLocales).map(String).includes(userLocale)) {
          changeLocale(userLocale as AvailableLocales)
        } else {
          changeLocale(Object.values(AvailableLocales)[0])
        }
      }
    },
    [locale]
  )

  if (locale === null || !Object.keys(intl.data).length) {
    return null
  }

  return (
    <IntlProvider
      locale={locale}
      messages={intl.data}
    >
      <Router />
    </IntlProvider>
  )
}
