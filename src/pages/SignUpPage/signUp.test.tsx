import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import SignUpPage from '.'

describe('SignUpPage', () => {
  test('signin button is disabled when email field and password field are not valid', () => {
    render(<SignUpPage />)
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const signInButton = screen.getByRole('button')

    expect(emailInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(signInButton).not.toBeEnabled()
  })

  test('signin button is enabled when email field and password field are both valid', async () => {
    render(<SignUpPage />)
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const signInButton = screen.getByRole('button')
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
