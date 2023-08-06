import classNames from 'classnames/bind'
import { FC, InputHTMLAttributes } from 'react'

import styles from './input.module.scss'

const cx = classNames.bind(styles)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputFor: string
  valid?: boolean
  touched?: boolean
}

const Input: FC<InputProps> = ({ inputFor, valid, touched, ...inputProps }) => {
  const pascalCase = inputFor.charAt(0).toUpperCase() + inputFor.slice(1).toLowerCase()
  const lowerCase = inputFor.toLowerCase()

  return (
    <div className={cx('inputWrapper', { valid: valid, invalid: !valid && touched })}>
      <label htmlFor={lowerCase}>{pascalCase}</label>
      <input
        className={cx('input', { valid: valid, invalid: !valid && touched })}
        id={lowerCase}
        placeholder={pascalCase}
        {...inputProps}
      />
    </div>
  )
}

export default Input
