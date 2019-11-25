import React from 'react'
import cn from 'classnames'
import moment from 'moment'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useList } from 'effector-react'
import { $preparedTodos, toggleTodoDone, deleteTask } from '../../model'
import classes from './style.module.less'

const dateFormatter = Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  day: 'numeric'
})

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
          title={dateFormatter.format(date)}
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
                  {moment(doneDate).format('LLLL')}
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
