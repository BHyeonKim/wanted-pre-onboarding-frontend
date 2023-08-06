import classNames from 'classnames/bind'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button className={cx('button')} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
