import React, { useMemo } from 'react'
import cn from 'classnames'
import classes from './style.module.less'

interface IProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Container = ({ children, className, style }: IProps) => {
  const ownStyle = useMemo(
    () => {
      if (style) {
        const { width, margin, ...eachStyles } = style

        return eachStyles
      }
    },
    [style]
  )

  return (
    <div
      className={cn(classes.wrapper, className)}
      style={ownStyle}
    >
      {children}
    </div>
  )
}
