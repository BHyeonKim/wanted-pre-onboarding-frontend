import { CheckIcon } from 'assets/svgs'
import classNames from 'classnames/bind'
import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'

import styles from './checkbox.module.scss'

const cx = classNames.bind(styles)

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, ...inputProps }, ref) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.currentTarget.checked)
    }

    return (
      <label className={cx('checkbox')}>
        <input type="checkbox" onChange={handleCheck} {...inputProps} ref={ref} />
        {isChecked && <CheckIcon className={cx('icon')} />}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
