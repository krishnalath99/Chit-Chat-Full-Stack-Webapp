import React, { useContext } from 'react'
import login from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import AuthContext from '../Context/AuthContext'


const LoginPage = () => {
  
  const {loginUser} = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    loginUser(email, password)
  }

  return (
    <div className="container-fluid" style={{ backgroundImage:`url(${bg})`, backgroundSize:"cover", backgroundPosition:"center", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', width: '80%', maxWidth: '600px' }}>
        <div className="row">
          <div className="col-md-6">
            <img src={login}className="img-fluid" alt="Login" style={{borderRadius: "20px"}} />
          </div>
          <div className="col-md-6">
            <h2 className="mb-2 text-center">Welcome Back</h2>
            <h3 className="mb-4 text-center">Please, Sign In</h3>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" name="email" placeholder='Enter your Email' required/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" name="password" placeholder='Enter your Password' required/>
              </div>
              <button type="submit" className="btn mt-2" style={{width: "100%", backgroundColor: "#26619c", color: "#ffff"}}>SignIn</button>
            </form>
            <div className="mt-3">
              <p>Don't have an account? <Link to="/register">SignUp</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage