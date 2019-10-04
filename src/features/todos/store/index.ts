import { createStore, combine } from 'effector'
import { loadTasks } from './effects'
import {
  addTask,
  addTaskWithDetails,
  deleteTask,
  changeFilterType,
  toggleTodoDone,
  toggleTodoDoneWithDetails
} from './events'
import { ITodosState, TodoFilterTypes } from '../types'
import { tasksApi } from 'api'

const initialState: ITodosState = {
  loading: false,
  initialized: false,
  data: [],
  filterType: TodoFilterTypes.allTasks
}

const $todos = createStore(initialState)

$todos
  .on(
    loadTasks, (state) => ({
      ...state,
      loading: true
    })
  )
  .on(
    loadTasks.done, (state, { result }) => ({
      ...state,
      data: result
    })
  )
  .on(
    loadTasks.fail, (state) => ({
      ...state,
      data: []
    })
  )
  .on(
    loadTasks.finally, (state) => ({
      ...state,
      loading: false,
      initialized: true
    })
  )
  .on(
    addTaskWithDetails, (state, payload) => ({
      ...state,
      data: [
        ...state.data,
        payload
      ]
    })
  )
  .on(
    deleteTask, (state, { taskTimestamp }) => ({
      ...state,
      data: state.data.filter(task => task.timestamp !== taskTimestamp)
    })
  )
  .on(
    changeFilterType, (state, { filterType }) => ({
      ...state,
      filterType
    })
  )
  .on(
    toggleTodoDoneWithDetails, (state, { todoTimestamp, doneTimestamp, flag }) => ({
      ...state,
      data: state.data.map(todo => {
        if (todo.timestamp === todoTimestamp) {
          return {
            ...todo,
            isDone: flag,
            doneTimestamp
          }
        }

        return todo
      })
    })
  )

const $reversedTodos = $todos.map(state => [...state.data].reverse())

const $reversedTasksByFilterType = combine($reversedTodos, $todos, (reversedTodos, { filterType }) => {
  switch (filterType) {
    case TodoFilterTypes.justDoneTasks:
      return reversedTodos.filter(todo => todo.isDone)

    case TodoFilterTypes.justUndoneTasks:
      return reversedTodos.filter(todo => !todo.isDone)

    default:
      return reversedTodos
  }
})

/*
  1. Save using forward. Better for functional programming

  forward({
    from: addTaskWithDetails,
    to: saveEvent
  })

  forward({
    from: deleteTask,
    to: saveEvent
  })

  forward({
    from: toggleTodoDoneWithDetails,
    to: saveEvent
  })

  sample($todos, saveEvent, state => state.data).watch(data => {
    tasksApi.save(data)
  })

  2. It also can be untyped merge

  const updated = merge([ addTaskWithDetails, deleteTask, toggleTodoDoneWithDetails ])

  sample($todos, updated, state => state.data).watch(data => {
    tasksApi.save(data)
  })
*/

const $todosAndInitialized = $todos.map(({ data, initialized }) => ({
  data,
  initialized
}))

$todosAndInitialized.watch(({ data, initialized }) => {
  if (!initialized) { return }

  tasksApi.save(data)
})

addTask.watch(payload => {
  addTaskWithDetails({
    ...payload,
    isDone: false,
    timestamp: new Date().getTime()
  })
})

toggleTodoDone.watch(payload => {
  const { flag } = payload

  const doneTimestamp = flag
    ? new Date().getTime()
    : undefined

  toggleTodoDoneWithDetails({
    ...payload,
    doneTimestamp
  })
})

export {
  $todos,
  $reversedTasksByFilterType,
  addTask,
  deleteTask,
  toggleTodoDone,
  changeFilterType,
  loadTasks
}
