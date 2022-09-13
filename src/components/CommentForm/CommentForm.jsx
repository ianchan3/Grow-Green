import { useState } from 'react';
import * as donationsAPI from '../../utilities/donations-api';


export default function CommentForm ({ setDonations, id }) {
  const [review, setReview] = useState({content: ''});
  
  async function handleSubmit(evt) {
    evt.preventDefault()
    let addedReview = await donationsAPI.addReview(review, id) 
    console.log(addedReview, 'review')
    setDonations(addedReview)
  }

  function handleChange(evt) {
    const newReview = {...review, [evt.target.name]: evt.target.value };
    setReview(newReview);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="content" onChange={handleChange} value={review.content} type="text" placeholder="comment" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}