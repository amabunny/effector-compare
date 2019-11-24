import { createEvent } from 'effector'
import { IPageSettings } from '../types'

export const setPageSetting = createEvent<Partial<IPageSettings>>()
