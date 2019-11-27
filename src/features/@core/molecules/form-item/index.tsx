import React from 'react'
import cn from 'classnames'
import classes from './style.module.less'

interface IProps {
  children: React.ReactNode
  label: React.ReactNode
  vertical?: boolean
}

export const FormItem = ({ children, label, vertical }: IProps) => {
  return (
    <div
      className={cn(classes.wrapper, {
        [classes.vertical]: vertical
      })}
    >
      <label>
        {label}:
      </label>

      <div>
        {children}
      </div>
    </div>
  )
}
