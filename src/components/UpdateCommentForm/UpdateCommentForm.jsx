import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function UpdateCommentForm ({ donations, updateComment }) {
  const { did } = useParams();
  const { cid } = useParams();
  const donation = donations.find(d => d._id === did);
  const comment = donation.comments.find(c => c._id === cid);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    content: comment.content
  });
  async function handleSubmit(evt) {
    evt.preventDefault()
    updateComment(formData, did, cid)
    navigate(`/donations/info/${did}`)
  }

  function handleChange(evt) {
    const newComment= {...formData, [evt.target.name]: evt.target.value };
    setFormData(newComment);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="content" onChange={handleChange} value={formData.content} type="text" placeholder="comment" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}