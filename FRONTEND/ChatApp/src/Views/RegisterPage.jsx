import React, { useContext, useState } from 'react'
import register from '../assets/register.jpg'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import AuthContext from '../Context/AuthContext'

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const {registerUser} = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault()
    registerUser(email, username, password, password2)
  }

  return (
    <div className="container-fluid" style={{ backgroundImage:`url(${bg})`, backgroundSize:"cover", backgroundPosition:"center", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px', width: '80%', maxWidth: '600px' }}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img src={register}className="img-fluid" alt="Login" style={{borderRadius: "20px"}} />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 text-center">Please, Sign Up</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" name='email' placeholder='Enter your Email' onChange={event => setEmail(event.target.value)} required/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="username" name='username' placeholder='Enter a Username' onChange={event => setUsername(event.target.value)} required/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" name='password' placeholder='Create a Password' onChange={event => setPassword(event.target.value)} required/>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password2" name='password2' placeholder='Confirm Password' onChange={event => setPassword2(event.target.value)} required/>
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" required/>
                <label className="form-check-label" htmlFor="terms">I accept the terms and conditions</label>
              </div>
              <button type="submit" className="btn mt-2" style={{width: "100%", backgroundColor: "#26619c", color: "#ffff"}}>SignUp</button>
            </form>
            <div className="mt-3">
              <p>Already have an account? <Link to="/login">SignIn</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage