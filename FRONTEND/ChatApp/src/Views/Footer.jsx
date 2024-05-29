import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'


const Footer = () => {
  return (
    <div>
      <footer className="footer sticky-bottom py-3" style={{backgroundColor: "#010203"}}>
        <div className="container">
            <div className="row">
            <div className="col-md-8">
                <p>
                <Link to="#" style={{marginRight: "10px"}}>About Us</Link> | 
                <Link to="#" style={{marginLeft: "10px"}}>Privacy Policy</Link><br /><br />
                <span style={{color: "#fff"}}>Copyright © 2024 ChitChat</span>
                </p>
            </div>
            <div className="col-md-4 text-center">
                <h5 style={{color: "#fff"}}>Follow Us On</h5>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="https://www.facebook.com" target="_blank"><img src={facebook} alt="" width="50" height="50" style={{marginRight: "20px"}}/></Link></li>
                    <li className="list-inline-item"><Link to="https://www.twitter.com" target="_blank"><img src={twitter} alt="" width="50" height="50" style={{marginRight: "20px"}}/></Link></li>
                    <li className="list-inline-item"><Link to="https://www.instagram.com" target="_blank"><img src={instagram} alt="" width="50" height="50"/></Link></li>
                </ul>
            </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer