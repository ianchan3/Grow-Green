import { useState } from 'react';
import './CommentForm.css';


export default function CommentForm ({ donationId, addComment }) {
  const [comment, setComment] = useState({content: ''});
  
  async function handleSubmit(evt) {
    evt.preventDefault()
    addComment(comment, donationId) 
  }

  function handleChange(evt) {
    const newComment= {...comment, [evt.target.name]: evt.target.value };
    setComment(newComment);
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input name="content" onChange={handleChange} value={comment.content} type="text" placeholder="comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}