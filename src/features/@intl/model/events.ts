import { createEvent } from 'effector'
import { AvailableLocales } from '../types'

export const changeLocale = createEvent<AvailableLocales>()
