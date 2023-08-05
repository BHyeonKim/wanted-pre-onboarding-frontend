import classNames from 'classnames/bind'
import { HTMLAttributes } from 'react'

import styles from './toast.module.scss'

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string
}
const cx = classNames.bind(styles)

const Toast = ({ message, ...props }: ToastProps) => {
  return (
    <div className={cx('toast', 'error')} {...props}>
      <p className={cx('message')}>{message}</p>
    </div>
  )
}

export default Toast
