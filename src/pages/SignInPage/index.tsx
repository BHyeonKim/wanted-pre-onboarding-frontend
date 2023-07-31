import classNames from 'classnames/bind'
import Button from 'components/Button'
import Input from 'components/Input'
import NavigationButton from 'components/NavigationButton'
import useInput from 'hooks/useInput'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import todo from 'services/todo'
import { setToken } from 'utils/localstorage'

import styles from './signIn.module.scss'

const cx = classNames.bind(styles)

const SigninPage = () => {
  const navigate = useNavigate()
  const [emailState, emailChangeHandler, emailBlurHandler] = useInput('email')
  const [passwordState, passwordChangeHandler, passwordBlurHandler] = useInput('password')

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    const { status, data } = await todo.signIn(emailState.value, passwordState.value)
    if (status !== 200) return
    setToken(data.access_token)
    navigate('/todo')
  }

  const disabled = !emailState.valid || !passwordState.valid

  return (
    <div className={cx('page')}>
      <form onSubmit={handleSignIn}>
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
        <NavigationButton data-testid="signip-button" to={'/signUp'} type="button">
          Sign up
        </NavigationButton>
      </form>
    </div>
  )
}

export default SigninPage
