import React, { useEffect, useCallback } from 'react'
import { Spin } from 'antd'
import { useStoreMap } from 'effector-react'
import { Form } from '../form'
import { List } from '../list'
import { FilterTypesSelect } from '../../molecules/filter-types-select'
import { $todos, changeFilterType, loadTasks } from '../../store'
import { TodoFilterTypes } from '../../types'
import classes from './style.module.less'

export const TodosRoot = () => {
  const { loading, filterType } = useStoreMap({
    store: $todos,
    keys: [],
    fn: ({ filterType, loading }) => ({ filterType, loading })
  })

  const onFilterTypeChange = useCallback(
    (filterType: TodoFilterTypes) => {
      changeFilterType({ filterType })
    },
    []
  )

  useEffect(
    () => {
      loadTasks()
    },
    []
  )

  return (
    <Spin spinning={loading}>
      <div className={classes.grid}>
        <div className={classes.filter}>
          <FilterTypesSelect
            value={filterType}
            onChange={onFilterTypeChange}
          />
        </div>

        <List />

        <Form className={classes.form} />
      </div>
    </Spin>
  )
}
