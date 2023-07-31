import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import TodoPage from 'pages/TodoPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route element={<TodoPage />} path="/todo" />
      <Route element={<SignInPage />} path="signIn" />
      <Route element={<SignUpPage />} path="signUp" />
    </Routes>
  )
}

export default App
