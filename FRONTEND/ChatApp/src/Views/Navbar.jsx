import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import AuthContext from '../Context/AuthContext'

const Navbar = () => {

  const {user, logoutUser} = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "#7ed4e6"}}>
            <div className="container-fluid">
                <Link className='navbar-brand d-flex align-items-center' to='/'>
                    <img src={logo} alt="Company Logo" width="70" height="70" className="d-inline-block align-top" style={{padding: "5px", marginLeft: "5px", marginRight: "5px"}}/>
                    Chit Chat
                </Link>

                <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {!user &&(
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>

                <ul className="navbar-nav">
                    <li className='nav-item d-flex align-items-center'style={{marginRight: "20px"}}>{user ? `Hey, ${user.username}` : 'Hey, Guest'}</li>
                    {user && (
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={`http://127.0.0.1:8000/media/${user.image}`} alt="Profile" className="rounded-circle" style={{ width: '60px', height: '60px' }} />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{backgroundColor: "#26619c"}}>
                            <li><Link className="dropdown-item" to="/my-profile">My Profile</Link></li>
                            <li><Link className="dropdown-item" to="/login" onClick={logoutUser}>Logout --&gt;</Link></li>
                            </ul>
                        </li>
                    )}
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar