import React from 'react'
import { Link } from '@reach/router'
import { FormattedMessage } from 'react-intl'
import { Icon } from 'antd'
import classes from './style.module.less'

const menuRoutePrefix = process.env.REACT_APP_SITE_PREFIX || ''

interface IMenuItem {
  intl: string
  path: string
  icon: string
}

const menuItems: IMenuItem[] = [
  {
    intl: 'menu.sequences',
    path: '/',
    icon: 'ordered-list'
  },
  {
    intl: 'menu.todos',
    path: '/todos',
    icon: 'unordered-list'
  },
  {
    intl: 'menu.about',
    path: '/about',
    icon: 'user'
  },
  {
    intl: 'menu.settings',
    path: '/settings',
    icon: 'setting'
  }
]

export const Menu = () => (
  <ul className={classes.wrapper}>
    {menuItems.map(({ intl, path, icon }) =>
      <li key={path}>
        <Link
          className={classes.link}
          to={menuRoutePrefix + path}
        >
          <Icon type={icon} />
          <FormattedMessage id={intl} />
        </Link>
      </li>
    )}
  </ul>
)
