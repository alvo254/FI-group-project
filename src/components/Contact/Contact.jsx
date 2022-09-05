import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div>
            <h1>Fell Free To Contact Us</h1>
            <section className="contact">
                <div className="contact-title">
                <h2>Contact Us</h2>
                <p>
                    <ul>
                        <li>Restaurant Review</li>
                        <li>4295 State HighWay</li>
                        <li>Phone:0157537838</li>
                        <li>contact@fairway.com</li>
                    </ul>
                </p>     
                </div>
                <div className="contact-pages">
                    <div>
                        <p>Let us know what you think! Share your feedback with us about our website, our products, our business, or anything else that comes to mind. We’re happy to answer any questions you have about our products and services, and we welcome all your questions, comments and suggestions.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact