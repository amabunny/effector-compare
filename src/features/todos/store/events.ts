import { createEvent } from 'effector'
import { TodoFilterTypes } from '../types'

interface IAddTask {
  description: string
}

export const addTask = createEvent<IAddTask>()

interface IAddTaskWithDetails extends IAddTask {
  isDone: boolean
  timestamp: number
}

export const addTaskWithDetails = createEvent<IAddTaskWithDetails>()

interface IDeleteTask {
  taskTimestamp: number
}

export const deleteTask = createEvent<IDeleteTask>()

interface IChangeFilterType {
  filterType: TodoFilterTypes
}

export const changeFilterType = createEvent<IChangeFilterType>()

interface IToggleTodoDone {
  todoTimestamp: number
  flag: boolean
}

export const toggleTodoDone = createEvent<IToggleTodoDone>()

interface IToggleTodoDoneWithDetails extends IToggleTodoDone {
  doneTimestamp?: number
}

export const toggleTodoDoneWithDetails = createEvent<IToggleTodoDoneWithDetails>()

export const saveEvent = createEvent<unknown>()
