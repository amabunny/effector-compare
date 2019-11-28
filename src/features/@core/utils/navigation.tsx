import React from 'react'
import { IRoutesSchema } from '../types'

const schemaPrefix = process.env.REACT_APP_SITE_PREFIX || ''

export const mapRoutesSchemaToJsx = (schema: IRoutesSchema) => Object.entries(schema).map(([path, Component]) => (
  <Component
    path={schemaPrefix + path}
    key={path}
  />
))