import React, { useState } from 'react'
import './Reviews.css'
import {FaTrash, FaEdit} from "react-icons/fa"
// import {uuid} from "uuidv4"

const Reviews = () => {

  const [form, setForm] = useState({resturant: "", review:"", id:null })
  const [reviews, setReviews] = useState([])
  const [edit, setEditing] = useState(false)

  const sendit = (e) => {
    e.preventDefault()
    setReviews([...reviews, form])
    setForm({resturant: "", review:"", id:null })

  }

  const update = e =>{
    e.preventDefault()
    setEditing(false)
    const updatedRevs = reviews.map(review => review.id == form.id ? form : review)

  }
  
  const handleEdit = id => {
    const editPost = reviews.filter(review => review.id == id)
    setForm(editPost[0])
    setEditing(true)
  }

  const change = e =>{
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }

  const deleting = id => {
    const uprev = reviews.filter(review => 
      review.id != id
      )
      setReviews(uprev)
    
  }

  return (
    <div className='master'>
      <form action="" onSubmit={edit ? update : sendit } className="form">
        <h2>leave a comment</h2>
        <label> Resturant</label>
        <input type="text" 
        placeholder='Restuarnt name' 
        id="resturant" name='resturant' value={form.resturant} onChange={change}/>

        <label> Review </label>
        <textarea type="text" 
        placeholder='Please leave a review' 
        id="review" name='review' value={form.review} onChange={change}/>
        <button type='submit'>{edit ? "Update" : "Submit"}</button>
      </form>
      <div className='revlist'>
        {reviews.map((review) => 
        <div className='revitem'>
          <h2>{review.resturant}</h2>
          <p>{review.review}</p>
          <div className="buttons">
            <button onClick={() => deleting(review.id)}> <FaTrash/> </button>
            <button onClick={() => handleEdit(review.id)}><FaEdit/></button>
          </div>
        </div>
        )}

      </div>
    </div>
  )
}

export default Reviews