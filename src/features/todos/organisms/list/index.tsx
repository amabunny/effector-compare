import React from 'react'
import cn from 'classnames'
import { FormattedDate } from 'react-intl'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useList } from 'effector-react'
import { $preparedTodos, toggleTodoDone, deleteTask } from '../../model'
import classes from './style.module.less'

interface IProps {
  itemClassName?: string
}

export const List = ({ itemClassName }: IProps) => {
  const items = useList($preparedTodos, ({
    description,
    doneTimestamp,
    isDone,
    timestamp,
  }) => {
    const date = new Date(timestamp)

    const doneDate = doneTimestamp
      ? new Date(doneTimestamp)
      : undefined

    const cardExtra = (
      <Row type='flex' gutter={8}>
        <Col>
          <Checkbox
            checked={isDone}
            onChange={e => toggleTodoDone({ todoTimestamp: timestamp, flag: !isDone })}
          />
        </Col>

        <Col>
          <Icon
            type='close'
            onClick={() => deleteTask({ taskTimestamp: timestamp })}
          />
        </Col>
      </Row>
    )

    return (
      <React.Fragment>
        <Card
          size='small'
          extra={cardExtra}
          title={(
            <FormattedDate
              value={date}
              hour='numeric'
              minute='numeric'
              day='numeric'
              month='long'
            />
          )}
          className={cn(itemClassName, classes.card, {
            fade: isDone
          })}
          key={timestamp}
        >
          <Typography.Paragraph className={classes.taskText}>
            {description}
          </Typography.Paragraph>

          {!!doneDate && (
            <div className={classes.done}>
              <span>
                <Icon type='check-circle' />
              </span>

              <span>
                <span>
                  <FormattedDate
                    value={doneDate}
                    hour='numeric'
                    minute='numeric'
                    day='numeric'
                    month='long'
                  />
                </span>
              </span>
            </div>
          )}
        </Card>
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  )
}
