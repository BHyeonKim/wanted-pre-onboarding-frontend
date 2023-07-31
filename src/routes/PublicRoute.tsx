import { Navigate, Outlet } from 'react-router-dom'
import { getToken } from 'utils/localstorage'

const PublicRoute = () => {
  const token = getToken()

  if (token) return <Navigate to="/todo" />

  return <Outlet />
}

export default PublicRoute
