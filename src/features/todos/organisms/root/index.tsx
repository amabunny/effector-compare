import React, { useEffect, useCallback } from 'react'
import { Row, Col, Spin } from 'antd'
import { useStoreMap } from 'effector-react'
import { Form } from '../form'
import { List } from '../list'
import { FilterTypesSelect } from '../../molecules/filter-types-select'
import { $todos, changeFilterType, loadTasks } from '../../store'
import { TodoFilterTypes } from '../../types'

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
      <Row type='flex' gutter={32}>
        <Col span={18}>
          <div className='mb-30'>
            <FilterTypesSelect
              value={filterType}
              onChange={onFilterTypeChange}
            />
          </div>

          <List />
        </Col>

        <Col span={6}>
          <Form />
        </Col>
      </Row>
    </Spin>
  )
}
