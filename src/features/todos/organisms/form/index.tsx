import React, { useState, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { Form as AntdForm, Input, Button, Typography } from 'antd'
import { addTask } from '../../model'

interface IProps {
  className?: string
}

export const Form = ({ className }: IProps) => {
  const { formatMessage } = useIntl()
  const [description, setDescription] = useState('')
  const [emptyDescError, setEmptyDescError] = useState(false)

  const submitForm = useCallback(
    () => {
      if (description) {
        addTask({ description })
        setDescription('')
        setEmptyDescError(false)
      } else {
        setEmptyDescError(true)
      }
    },
    [description]
  )

  const onDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value)
    },
    []
  )

  const onTextAreaKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const { key } = e

      if (key === 'Enter') {
        e.preventDefault()
        submitForm()
      }
    },
    [submitForm]
  )

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      submitForm()
    },
    [submitForm]
  )

  return (
    <AntdForm
      onSubmit={onSubmit}
      className={className}
    >
      <Typography.Title level={4}>
        {formatMessage({ id: 'tasks.form.addTask' })}
      </Typography.Title>

      <AntdForm.Item
        label={formatMessage({ id: 'tasks.form.description' })}
        validateStatus={emptyDescError ? 'error' : 'success'}
        required
        extra={emptyDescError ? formatMessage({ id: 'tasks.form.enterDescription' }) : ''}
      >
        <Input.TextArea
          value={description}
          onChange={onDescriptionChange}
          onKeyDown={onTextAreaKeydown}
          rows={4}
        />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type='primary' htmlType='submit'>
          {formatMessage({ id: 'tasks.form.add' })}
        </Button>
      </AntdForm.Item>
    </AntdForm>
  )
}
