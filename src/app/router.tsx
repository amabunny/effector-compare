import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { IRoutesSchema, mapRoutesSchemaToJsx } from 'features/@core'

import { TodosPage } from 'features/todos'
import { AboutPage } from 'features/about'
import { SettingsPage } from 'features/settings'

const appRoutes: IRoutesSchema = {
  '/': TodosPage,
  '/about': AboutPage,
  '/settings': SettingsPage
}

export const Router = () => (
  <ReachRouter>
    {mapRoutesSchemaToJsx(appRoutes)}
  </ReachRouter>
)