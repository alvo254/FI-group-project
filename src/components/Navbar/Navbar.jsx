import React from "react";
import "./Navbar.css"

const NavBar =() => {
    return(
        <div className="navbar">
            <span className="nav-logo">Restaurant Review</span>
            <div className="nav-items">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/reviews">Reviews</a>
                <a href="/restaurants">Restaurants</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar