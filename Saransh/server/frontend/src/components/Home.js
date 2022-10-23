import React from 'react'

const Home = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h1 className='center-aligna'>Welcome to the Vision+</h1>
    <p className='center-aligna'>
        No Waiting | No Booking | No Fees | Just Instant Vision Check
    </p>
    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{width: '100%',  l : 'auto'}} >
    <div class="carousel-item active">
      <img src={require('./img/Eye_hero.jpg')} class="d-block w-100 h-60 " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={require('./img/kid eyetest.jpg')} class="d-block w-100 h-60" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={require('./img/Vision Roundup Thumbnail 061318.png')} class="d-block w-100 h-60" alt="..." />
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  
</div>
    </div>
    
  )
}

export default Home
