export interface ISequenceItem {
  handler: (sequenceItem: ISequenceItem) => void
  timestamp: number
  delayInSec: number
  task: () => NodeJS.Timeout
  timeout?: NodeJS.Timeout
}
