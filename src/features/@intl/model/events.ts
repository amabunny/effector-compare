import { createEvent } from 'effector'
import { availableLocales } from '../types'

export const changeLocale = createEvent<availableLocales>()
