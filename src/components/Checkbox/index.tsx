import { CheckIcon } from 'assets/svgs'
import classNames from 'classnames/bind'
import { ChangeEvent, useState } from 'react'

import styles from './checkbox.module.scss'

const cx = classNames.bind(styles)

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked)
  }

  return (
    <label className={cx('checkbox')}>
      <input type="checkbox" onChange={handleCheck} />
      {isChecked && <CheckIcon className={cx('icon')} />}
    </label>
  )
}

export default Checkbox
