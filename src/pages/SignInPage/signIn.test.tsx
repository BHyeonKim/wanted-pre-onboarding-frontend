import { logRoles } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import SigninPage from '.'

describe('SigninPage', () => {
  test('signin button is disabled when email field and password field are not valid', () => {
    render(<SigninPage />)
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const signInButton = screen.getByRole('button', { name: 'Sign in' })

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(signInButton).not.toBeEnabled()
  })

  test('signin button is enabled when email field and password field are both valid', async () => {
    const { container } = render(<SigninPage />)
    logRoles(container)
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const signInButton = screen.getByRole('button', { name: 'Sign in' })
    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(signInButton).not.toBeEnabled()
    await act(async () => {
      await userEvent.type(emailInput, 'rlaqhguse@gmail.com')
    })
    expect(signInButton).not.toBeEnabled()
    await act(async () => {
      await userEvent.type(passwordInput, '12345678')
    })
    expect(signInButton).toBeEnabled()
  })
})
