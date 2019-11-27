import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FormItem } from 'features/@core'
import { LanguagesSelect } from '../languages-select'

export const Root = () => {
  return (
    <div>
      <FormItem label={<FormattedMessage id='settings.languagesSelect' />}>
        <LanguagesSelect style={{ width: '100%' }} />
      </FormItem>
    </div>
  )
}
