import classNames from 'classnames/bind'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

const Button = ({
  children,
  ...buttonProps
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={cx('button')} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
