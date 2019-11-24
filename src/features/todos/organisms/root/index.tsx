import React, { useEffect, useCallback } from 'react'
import { Spin, DatePicker, Input } from 'antd'
import { RangePickerProps } from 'antd/lib/date-picker/interface'
import { useStoreMap, useStore } from 'effector-react'
import { Form } from '../form'
import { List } from '../list'
import { FilterTypesSelect } from '../../molecules/filter-types-select'
import { $todos, $params, setParams, loadTasks } from '../../model'
import { TodoFilterTypes } from '../../types'
import classes from './style.module.less'

export const TodosRoot = () => {
  const { dates, filterString, filterType } = useStore($params)

  const { loading } = useStoreMap({
    store: $todos,
    keys: [],
    fn: ({ loading }) => ({ loading })
  })

  const onFilterTypeChange = useCallback(
    (filterType: TodoFilterTypes) => {
      setParams({ filterType })
    },
    []
  )

  const onFilterStringChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setParams({ filterString: e.target.value })
    },
    []
  )

  const onDatesChange = useCallback<NonNullable<RangePickerProps['onChange']>>(
    ([startPeriod, endPeriod]) => {
      if (startPeriod && endPeriod) {
        setParams({ dates: [startPeriod, endPeriod] })
      } else {
        setParams({ dates: null })
      }
    },
    []
  )

  useEffect(
    () => {
      loadTasks()
    },
    []
  )

  useEffect(
    () => {
      setParams({ initialized: true })

      return () => {
        setParams({ initialized: false })
      }
    },
    []
  )

  return (
    <Spin spinning={loading}>
      <div className={classes.grid}>
        <div className={classes.filter}>
          <div>
            <FilterTypesSelect
              value={filterType}
              onChange={onFilterTypeChange}
            />
          </div>

          <div>
            <DatePicker.RangePicker
              allowClear
              onChange={onDatesChange}
              value={dates || undefined}
              style={{ width: '289px' }}
            />
          </div>

          <div>
            <Input.Search
              value={filterString}
              onChange={onFilterStringChange}
              placeholder='Поиск...'
            />
          </div>
        </div>

        <Form className={classes.form} />

        <div className={classes.list}>
          <List itemClassName={classes.listItem} />
        </div>
      </div>
    </Spin>
  )
}
