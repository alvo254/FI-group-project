import React from 'react'
import Comment from '../Comment/Comment'
import {useEffect, useState} from "react";


const Restuarants = () => {
  const [restaurants, setRestaurant] = useState([])

    useEffect(()=>{
        fetch("https://rack-hosting-1.herokuapp.com/reviews")
        .then(res=>res.json())
        .then((data) =>
        setRestaurant(data)   
        )
    },[])
    console.log(restaurants)

    const allComments = restaurants.map((restaurant)=>{
      return( <Comment  key={restaurant.id}
        name={restaurant.name}
        location ={restaurant.location}
        body = {restaurant.reviews.map(review => {
            return review.body     
        })}
         user = {restaurant.reviews.map(review => {
            return review.user.name

         })}

        />)
    })
    return(
    <>
    <div className="allCommnets">
    {allComments}
    </div>
    </>
    )
  



  
}

export default Restuarants