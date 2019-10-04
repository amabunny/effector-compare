import React, { useMemo } from 'react'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useStore } from 'effector-react'
import { $reversedTasksByFilterType, toggleTodoDone, deleteTask } from '../../store'

const dateFormatter = Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  day: 'numeric'
})

export const List = () => {
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
    <Row type='flex' gutter={16}>
      {todosWithDates.map(({
        name,
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
          <Col
            span={8}
            key={timestamp}
            style={{
              marginBottom: '15px',
              opacity: isDone ? 0.5 : 1
            }}
          >
            <Card
              title={name}
              size='small'
              extra={cardExtra}
            >
              <Typography.Paragraph style={{ whiteSpace: 'pre-line' }}>
                {description}
              </Typography.Paragraph>

              <div>
                <strong>
                  Создано:&nbsp;
                </strong>

                <span>
                  {dateFormatter.format(date)}
                </span>
              </div>

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
          </Col>
        )
      })}
    </Row>
  )
}
