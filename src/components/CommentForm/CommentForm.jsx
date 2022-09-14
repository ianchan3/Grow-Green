import { useState } from 'react';


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
      <form onSubmit={handleSubmit}>
        <input name="content" onChange={handleChange} value={comment.content} type="text" placeholder="comment" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}