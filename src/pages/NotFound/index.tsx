import classNames from 'classnames/bind'

import styles from './notFound.module.scss'

const cx = classNames.bind(styles)

const NotFoundPage = () => {
  return (
    <div className={cx('page')}>
      <p>Page not found...!</p>
    </div>
  )
}

export default NotFoundPage
