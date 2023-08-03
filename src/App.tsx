import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import TodoPage from 'pages/TodoPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from 'routes/ProtectedRoute'
import PublicRoute from 'routes/PublicRoute'

const App = () => {
  return (
    <Routes>
      <Route element={<Navigate to={'/signin'} />} path="/" />
      <Route element={<PublicRoute />}>
        <Route element={<SignInPage />} path="signin" />
        <Route element={<SignUpPage />} path="signup" />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<TodoPage />} path="/todo" />
      </Route>
    </Routes>
  )
}

export default App
