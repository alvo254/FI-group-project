import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <h1>About</h1>
    <div className="about">
    <div className="img">
    <img src={process.env.PUBLIC_URL + '/images/img3.jpg'} alt="Valentine" className='image1'></img>
    </div>
        <div className="content">
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
        </div>
    </div>
    <div className="about">
        <div className="content">
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
        </div>
        <div className="img">
        <img src={process.env.PUBLIC_URL + '/images/istockphoto-694189032-170667a.jpg'} alt="Valentine" className='image1'></img>
        </div>
    </div>
    </>
    
  )
}

export default About