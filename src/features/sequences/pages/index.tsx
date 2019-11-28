import React from 'react'
import { BaseTemplate, Container } from 'features/@core'
import { Root } from '../organisms/root'
import { FormattedMessage } from 'react-intl'

export const SequencesPage = () => {
  return (
    <BaseTemplate pageTitle={<FormattedMessage id='sequences' />}>
      <Container>
        <Root />
      </Container>
    </BaseTemplate>
  )
}
