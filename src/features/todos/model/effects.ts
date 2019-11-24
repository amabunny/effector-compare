import { createEffect } from 'effector'
import { tasksApi } from 'api'

export const loadTasks = createEffect({
  handler () {
    return tasksApi.load()
  }
})
