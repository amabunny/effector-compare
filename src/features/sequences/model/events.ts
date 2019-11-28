import { createEvent } from 'effector'
import { ISequenceItem } from '../types'

export const addSequenceItem = createEvent<Pick<ISequenceItem, 'handler'>>()

export const addSequenceItemWithDetails = createEvent<ISequenceItem>()

export const addTimeoutToSequenceElement = createEvent<{ timeout: NodeJS.Timeout, item: ISequenceItem }>()

type FilterPredicate = {
  filter: (item: ISequenceItem) => boolean
}

export const filterSequence = createEvent<FilterPredicate>()

export const clearSequence = createEvent<FilterPredicate>()

export const addLogRecord = createEvent<string>()

export const resetLogs = createEvent()
