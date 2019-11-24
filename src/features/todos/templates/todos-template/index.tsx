import React from 'react'
import { BaseTemplate, Container } from 'features/@core'

interface IProps {
  children: React.ReactNode
}

export const TodosTemplate = ({ children }: IProps) => {
  return (
    <BaseTemplate pageTitle='Todos'>
      <Container>
        {children}
      </Container>
    </BaseTemplate>
  )
}
