import React, { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import getUserLocale from 'get-user-locale'
import { useStore } from 'effector-react'
import { $locale, $intl, changeLocale, availableLocales } from 'features/@intl'
import { Router } from './router'

export const App = () => {
  const intl = useStore($intl)
  const locale = useStore($locale)

  useEffect(
    () => {
      const userLocale = getUserLocale()

      if (Object.values(availableLocales).map(String).includes(userLocale)) {
        changeLocale(userLocale as availableLocales)
      } else {
        changeLocale(Object.values(availableLocales)[0])
      }
    },
    []
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
