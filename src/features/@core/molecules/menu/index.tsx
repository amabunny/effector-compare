import React from 'react'
import { Link } from '@reach/router'
import classes from './style.module.less'

interface IMenuItem {
  intl: string
  path: string
}

const menuItems: IMenuItem[] = [
  {
    intl: 'Todos',
    path: '/'
  },
  {
    intl: 'About',
    path: '/about'
  }
]

export const Menu = () => (
  <ul className={classes.wrapper}>
    {menuItems.map(({ intl, path }) =>
      <li key={path}>
        <Link to={path}>
          {intl}
        </Link>
      </li>
    )}
  </ul>
)
