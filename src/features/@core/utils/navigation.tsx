import React from 'react'
import { IRoutesSchema } from '../types'

export const sitePrefix = process.env.REACT_APP_SITE_PREFIX || ''

export const mapRoutesSchemaToJsx = (schema: IRoutesSchema) => Object.entries(schema).map(([path, Component]) => (
  <Component
    path={sitePrefix + path}
    key={path}
  />
))