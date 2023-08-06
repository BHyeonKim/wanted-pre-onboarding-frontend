import classNames from 'classnames/bind'
import { FC, HTMLAttributes } from 'react'

import styles from './toast.module.scss'

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string
}
const cx = classNames.bind(styles)

const Toast: FC<ToastProps> = ({ message, ...props }) => {
  return (
    <div className={cx('toast', 'error')} {...props}>
      <p className={cx('message')}>{message}</p>
    </div>
  )
}

export default Toast
