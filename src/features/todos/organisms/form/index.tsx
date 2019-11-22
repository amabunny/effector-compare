import React, { useState, useCallback } from 'react'
import { Form as AntdForm, Input, Button, Typography } from 'antd'
import { addTask } from '../../store'

interface IProps {
  className?: string
}

export const Form = ({ className }: IProps) => {
  const [description, setDescription] = useState('')

  const submitForm = useCallback(
    () => {
      addTask({ description })
      setDescription('')
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
        Добавить задачу:
      </Typography.Title>

      <AntdForm.Item label='Описание'>
        <Input.TextArea
          value={description}
          onChange={onDescriptionChange}
          onKeyDown={onTextAreaKeydown}
          rows={4}
        />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type='primary' htmlType='submit'>
          Добавить
        </Button>
      </AntdForm.Item>
    </AntdForm>
  )
}
