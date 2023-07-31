import { Navigate, Outlet } from 'react-router-dom'
import { getToken } from 'utils/localstorage'

const ProtectedRoute = () => {
  const token = getToken()

  if (!token) return <Navigate to="/signin" />

  return <Outlet />
}

export default ProtectedRoute
