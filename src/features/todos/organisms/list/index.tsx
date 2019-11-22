import React, { useMemo } from 'react'
import cn from 'classnames'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useStore } from 'effector-react'
import { $reversedTasksByFilterType, toggleTodoDone, deleteTask } from '../../store'

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
  const todos = useStore($reversedTasksByFilterType)

  const todosWithDates = useMemo(
    () =>
      todos.map(
        ({ timestamp, doneTimestamp , ...each }) => ({
          ...each,
          timestamp,
          date: new Date(timestamp),
          doneDate: doneTimestamp
            ? new Date(doneTimestamp)
            : undefined
        })
      ),
    [todos]
  )

  return (
    <React.Fragment>
      {todosWithDates.map(({
        description,
        timestamp,
        isDone,
        date,
        doneDate
      }) => {
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
          <div
            className={cn(itemClassName, {
              fade: isDone
            })}
            key={timestamp}
          >
            <Card
              size='small'
              extra={cardExtra}
              title={dateFormatter.format(date)}
            >
              <Typography.Paragraph style={{ whiteSpace: 'pre-line' }}>
                {description}
              </Typography.Paragraph>

              {!!doneDate && (
                <div>
                  <strong>
                    Завершено:&nbsp;
                  </strong>

                  <span>
                    {dateFormatter.format(doneDate)}
                  </span>
                </div>
              )}
            </Card>
          </div>
        )
      })}
    </React.Fragment>
  )
}
