import React from "react";
import "./Navbar.css"

const NavBar =() => {
    return(
        <div className="navbar">
            <span className="nav-logo">Restaurant Review</span>
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/reviews">Add Resturant</a>
                <a href="/restaurants">Reviews</a>
                <a href="/add">Add Reviews</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar