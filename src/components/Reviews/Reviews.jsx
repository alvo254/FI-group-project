import React, { useEffect, useState } from 'react'
import './Reviews.css'
import {FaTrash, FaEdit} from "react-icons/fa"
import axios from 'axios'
// import {uuid} from "uuidv4"

const Reviews = () => {

  const [form, setForm] = useState({resturant: "", review:"", id:null })
  const [reviews, setReviews] = useState([])
  const [data, setData] = useState([])
  const [edit, setEditing] = useState(false)
  const [geting, setGeting] = useState([])



  useEffect(() =>{
    axios.post("https://rack-hosting-1.herokuapp.com/restaurants")
    .then((data) =>{setData(data.data)})
    
  },[])
  // console.log(data.location)

  useEffect(() => {
    axios("https://rack-hosting-1.herokuapp.com/restaurants")
    .then((geting) => {console.log(geting.data)})
  })
  console.log(geting.location)

  const sendit = (e) => {
    e.preventDefault()
    // const {name, location} = e.target
    // setReviews({...form, [name]:location})
    setReviews([...reviews, form])
    setForm({resturant: "", review:"", id:null })

  }

  const update = e =>{
    e.preventDefault()
    setEditing(false)
    const updatedRevs = reviews.map(review => review.id == form.id ? form : review)
    setReviews(updatedRevs)
    setForm({resturant: "", review:"", id:null })
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
        <h2>Add Resturant</h2>
        <label> Name</label>
        <input type="text" 
        placeholder='Restuarnt name' 
        id="resturant" name='resturant' value={form.resturant} onChange={change}/>

        <label> Location </label>
        <textarea type="text" 
        placeholder='Please leave a review' 
        id="review" name='review' value={form.review} onChange={change}/>
        <button type='submit'>{edit ? "Update" : "Submit"}</button>
      </form>
      <div className='revlist'>
        {reviews.map((review) => 
        <div key = {review.id} className='revitem'>
          <h2>{data.name}</h2>
          <p>{review.location}</p>
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