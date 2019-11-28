import React from 'react'
import { Container } from '../../atoms/container'
import { Menu } from '../../molecules/menu'
import { DEFAULT_PROJECT_NAME } from '../../model'
import classes from './style.module.less'

interface IProps {
  children: React.ReactNode
  pageTitle?: React.ReactNode
}

export const BaseTemplate = ({
  children,
  pageTitle = DEFAULT_PROJECT_NAME
}: IProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Container>
          <div className={classes.headerContainer}>
            <div>
              {pageTitle}
            </div>

            <Menu />
          </div>
        </Container>
      </div>

      <div className={classes.content}>
        <div className={classes.contentPaper}>
          {children}
        </div>

        <div className={classes.footer}>
          <Container>
            {DEFAULT_PROJECT_NAME}, {new Date().getFullYear()}
          </Container>
        </div>
      </div>
    </div>
  )
}
