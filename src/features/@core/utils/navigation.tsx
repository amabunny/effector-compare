import React from 'react'
import { IRoutesSchema } from '../types'

export const mapRoutesSchemaToJsx = (schema: IRoutesSchema) => Object.entries(schema).map(([path, Component]) => (
  <Component
    path={path}
    key={path}
  />
))