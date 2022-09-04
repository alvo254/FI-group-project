import React, { useState } from 'react'
import './Reviews.css'
// import {uuid} from "uuidv4"

const Reviews = () => {

  const [form, setForm] = useState({resturant: "", review:"", id:null })
  const [reviews, setReviews] = useState([])

  const sendit = (e) => {
    e.preventDefault()
    setReviews([...reviews, form])
    setForm({resturant: "", review:"", id:null })

  }

  const change = e =>{
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }

  return (
    <div className='master'>
      <form action="" onSubmit={sendit} className="form">
        <h2>leave a comment</h2>
        <label> Resturant</label>
        <input type="text" 
        placeholder='Restuarnt name' 
        id="resturant" name='resturant' value={form.resturant} onChange={change}/>

        <label> Review </label>
        <textarea type="text" 
        placeholder='Please leave a review' 
        id="review" name='review' value={form.review} onChange={change}/>
        <button type='submit'>submit</button>
      </form>
      <div className='revlist'>
        {reviews.map((review) => 
        <div className='revitem'>
          <h2>{review.resturant}</h2>
          <p>{review.review}</p>
        </div>
        )}

      </div>
    </div>
  )
}

export default Reviews