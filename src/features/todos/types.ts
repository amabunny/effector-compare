import { Moment } from 'moment'

export interface ITodo {
  timestamp: number
  description: string
  isDone: boolean
  doneTimestamp?: number
}

export enum TodoFilterTypes {
  justDoneTasks = 'justDoneTasks',
  justUndoneTasks = 'justUndoneTasks',
  allTasks = 'allTasks'
}

export interface ITodosState {
  loading: boolean
  data: ITodo[]
}

export interface IParams {
  filterType: TodoFilterTypes
  filterString: string
  dates: [Moment, Moment] | null
  initialized: boolean
}
