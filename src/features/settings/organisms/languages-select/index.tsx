import React, { useCallback } from 'react'
import { FormattedMessage } from 'react-intl'
import { useStore } from 'effector-react'
import { Select } from 'antd'
import { availableLocales, $locale, changeLocale } from 'features/@intl'

interface IProps {
  style?: React.CSSProperties
}

export const LanguagesSelect = ({ style }: IProps) => {
  const locale = useStore($locale)

  const onChange = useCallback(
    (value: availableLocales) => {
      changeLocale(value)
    },
    []
  )

  return (
    <Select
      style={style}
      value={locale || undefined}
      onChange={onChange}
    >
      {Object.values(availableLocales).map(locale =>
        <Select.Option
          value={locale}
          key={locale}
        >
          <FormattedMessage id={`settings.languagesSelect.${locale}`} />
        </Select.Option>
      )}
    </Select>
  )
}
