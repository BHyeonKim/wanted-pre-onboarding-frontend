import classNames from 'classnames/bind'
import Button from 'components/Button'
import Input from 'components/Input'
import useInput from 'hooks/useInput'

import styles from './signIn.module.scss'

const cx = classNames.bind(styles)

const SigninPage = () => {
  const [emailState, emailChangeHandler, emailBlurHandler] = useInput('email')
  const [passwordState, passwordChangeHandler, passwordBlurHandler] = useInput('password')

  const disabled = !emailState.valid || !passwordState.valid

  return (
    <div className={cx('page')}>
      <form>
        <Input
          data-testid="email-input"
          inputFor="email"
          touched={emailState.touched}
          valid={emailState.valid}
          value={emailState.value}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        <Input
          data-testid="password-input"
          inputFor="password"
          touched={passwordState.touched}
          type="password"
          valid={passwordState.valid}
          value={passwordState.value}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
        />
        <Button data-testid="signip-button" disabled={disabled} type="submit">
          Sign in
        </Button>
        <Button data-testid="signip-button" type="button">
          Sign up
        </Button>
      </form>
    </div>
  )
}

export default SigninPage
