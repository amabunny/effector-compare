import React from 'react'
import { Router as ReachRouter } from '@reach/router'
import { IRoutesSchema, mapRoutesSchemaToJsx } from 'features/@core'

import { TodosPage } from 'features/todos'
import { AboutPage } from 'features/about'
import { SettingsPage } from 'features/settings'
import { SequencesPage } from 'features/sequences'

const appRoutes: IRoutesSchema = {
  '/': SequencesPage,
  '/about': AboutPage,
  '/settings': SettingsPage,
  '/todos': TodosPage
}

export const Router = () => (
  <ReachRouter>
    {mapRoutesSchemaToJsx(appRoutes)}
  </ReachRouter>
)