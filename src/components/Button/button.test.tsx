import { render, screen } from '@testing-library/react'

import Button from '.'

test('unclickable when button is disabled', async () => {
  render(<Button disabled>Sign in</Button>)
  const button = screen.getByRole('button')

  expect(button).toBeDisabled()
})
