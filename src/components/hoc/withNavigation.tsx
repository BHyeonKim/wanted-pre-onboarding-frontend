import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
type ButtonWithNavigationProps = ButtonProps & LinkProps

const withNavigation = (
  Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>,
) => {
  const ButtonWithNavigation: FC<ButtonWithNavigationProps> = ({
    to,
    children,
    ...props
  }) => (
    <Link to={to}>
      <Button {...props}>{children}</Button>
    </Link>
  )
  return ButtonWithNavigation
}

export default withNavigation
