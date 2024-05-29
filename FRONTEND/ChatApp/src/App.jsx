import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import MainPage from './Components/MainPage'
import HomePage from './Views/HomePage'
import LoginPage from './Views/LoginPage'
import RegisterPage from './Views/RegisterPage'
import MyProfile from './Views/MyProfile'
import PrivateRoute from './Utils/PrivateRoute'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/my-profile' element={<PrivateRoute />}>
              <Route path='' element={<MyProfile />}/>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App