import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  )
}
