import React from 'react'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import './Home.css'

const HomePage = () => {
  
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="First slide"/>
          <div className="overlay">
            <h2 className='heading'>CONNECTING PEOPLE</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Second slide"/>
          <div className="overlay">
            <h2 className="texxt">Talk to your<br />loved-ones</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Third slide"/>
          <div className="overlay">
            <h2 className="texxt">Build Communities<br />Make new friends.</h2>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  )
}

export default HomePage