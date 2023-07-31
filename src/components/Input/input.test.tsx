import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '.'

test('input is focused when label is clicked', async () => {
  render(<Input inputFor="email" />)

  const label = screen.getByText('Email')
  const input = screen.getByRole('textbox')

  expect(input).not.toHaveFocus()

  await userEvent.click(label)

  expect(input).toHaveFocus()
})
