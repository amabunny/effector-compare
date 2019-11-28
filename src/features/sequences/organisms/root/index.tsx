import React, { useMemo, useCallback } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Button, Input } from 'antd'
import { useStore } from 'effector-react'
import { $logs, addSequenceItem, addLogRecord, clearSequence, resetLogs } from '../../model'
import classes from './style.module.less'

export const Root = () => {
  const { formatMessage, formatDate } = useIntl()
  const logs = useStore($logs)

  const onResetClick = useCallback(
    () => {
      clearSequence({ filter: () => false })
      resetLogs()
    },
    []
  )

  const buttons = useMemo(
    () => new Array(3).fill(undefined).map((_, index) => {
      const onBtnClick = () => {
        addSequenceItem({
          handler ({ delayInSec }) {
            const date = formatDate(new Date(), {
              hour: 'numeric',
              minute: 'numeric',
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            })

            addLogRecord(
              formatMessage({
                id: 'sequences.logMessage'
              }, {
                index: index + 1,
                date,
                delay: delayInSec
              })
            )
          }
        })
      }

      return (
        <div key={index}>
          <Button onClick={onBtnClick}>
            <FormattedMessage id={`sequences.button${index + 1}`} />
          </Button>
        </div>
      )
    }),
    [formatDate, formatMessage]
  )

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
        {buttons}
      </div>

      <div>
        <Input.TextArea
          className={classes.textarea}
          readOnly
          rows={10}
          value={logs.join('\n')}
        />
      </div>

      <div className={classes.footer}>
        <Button onClick={onResetClick}>
          <FormattedMessage id='sequences.reset' />
        </Button>
      </div>
    </div>
  )
}
