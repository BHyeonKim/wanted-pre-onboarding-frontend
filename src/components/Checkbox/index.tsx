import { CheckIcon } from 'assets/svgs'
import classNames from 'classnames/bind'
import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react'

import styles from './checkbox.module.scss'

const cx = classNames.bind(styles)

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, ...inputProps }) => {
  return (
    <label className={cx('checkbox')}>
      <input checked={checked} type="checkbox" onChange={onChange} {...inputProps} />
      {checked && <CheckIcon className={cx('icon')} />}
    </label>
  )
}

export default Checkbox
