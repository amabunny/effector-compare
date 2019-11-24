import React from 'react'
import cn from 'classnames'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useList } from 'effector-react'
import { $preparedTodos, toggleTodoDone, deleteTask } from '../../model'

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
            <Typography.Paragraph style={{ whiteSpace: 'pre-line', margin: 0 }}>
              {description}
            </Typography.Paragraph>

            {!!doneDate && (
              <div>
                <br />

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
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  )
}
