import SignInPage from 'pages/SignInPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route element={<SignInPage />} path="signIn" />
      <Route path="signUp" />
    </Routes>
  )
}

export default App
