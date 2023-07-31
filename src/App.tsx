import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import TodoPage from 'pages/TodoPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route element={<TodoPage />} path="/todo" />
      <Route element={<SignInPage />} path="signin" />
      <Route element={<SignUpPage />} path="signup" />
    </Routes>
  )
}

export default App
