import { createStore, sample } from 'effector'
import {
  addLogRecord,
  addSequenceItem,
  addSequenceItemWithDetails,
  addTimeoutToSequenceElement,
  filterSequence,
  clearSequence,
  resetLogs
} from './events'
import { ISequenceItem } from '../types'

// It also can be wrapped into function to follow "Fabric" pattern.

const MAXIMUM_DELAY_SECONDS = 10

const $sequences = createStore<ISequenceItem[]>([])

$sequences
  .on(addSequenceItemWithDetails, (state, item) => state.concat(item))
  .on(addTimeoutToSequenceElement, (state, { item, timeout }) => state.map(sequenceItem => {
    if (item.timestamp === sequenceItem.timestamp) {
      return {
        ...item,
        timeout
      }
    }

    return sequenceItem
  }))
  .on(filterSequence, (state, { filter }) => state.filter(filter))

addSequenceItem.watch(({ handler }) => {
  const delayInSec = Math.floor(Math.random() * MAXIMUM_DELAY_SECONDS) + 1
  const timestamp = new Date().getTime()

  const sequenceItem: ISequenceItem = {
    delayInSec,
    handler,
    task: () => setTimeout(() => {
      handler(sequenceItem)
      clearSequence({ filter: item => timestamp !== item.timestamp })
    }, delayInSec * 1000),
    timestamp
  }

  addSequenceItemWithDetails(sequenceItem)
})

$sequences.watch(sequences => {
  const sequenceStarted = sequences.some(({ timeout }) => Boolean(timeout))

  if (!sequenceStarted) {
    const sequenceItem = sequences[0]

    if (sequenceItem) {
      const timeout = sequenceItem.task()

      addTimeoutToSequenceElement({
        item: sequenceItem,
        timeout
      })
    }
  }
})

$sequences.watch(console.log)

const sampledClearSequence = sample(
  $sequences,
  clearSequence,
  (sequences, { filter }) => ({ sequences, filter })
)

sampledClearSequence.watch(({ filter, sequences }) => {
  sequences.forEach(sequenceItem => {
    if (!filter(sequenceItem) && sequenceItem.timeout) {
      clearTimeout(sequenceItem.timeout)
    }
  })

  filterSequence({ filter })
})

const $logs = createStore<string[]>([])

$logs
  .on(addLogRecord, (logs, newRecord) => logs.concat(newRecord))
  .reset(resetLogs)

export {
  $sequences,
  $logs,
  addSequenceItem,
  addLogRecord,
  clearSequence,
  resetLogs
}
