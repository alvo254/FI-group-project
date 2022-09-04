import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
            <span className="nav-logo">Restaurant Review</span>
            <div className="nav-items">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/review">Review</a>
                <a href="/restaurant">Restaurant</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
  )
}

export default Navbar