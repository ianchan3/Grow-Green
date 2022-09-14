import DonationDetail from "../../components/DonationDetail/DonationDetail";
import CommentForm from "../../components/CommentForm/CommentForm";
import * as donationsAPI from "../../utilities/donations-api";
import {  useParams, Link } from 'react-router-dom';
import {  useEffect } from 'react';


export default function DonationInfo ({ donations, addComment }) {
  const { id } = useParams();
  const donation = donations.find(d => d._id === id);
 


  return (
    <>
    <div>
    <DonationDetail donation={donation}/>
    <br></br>
    <CommentForm addComment={addComment} donationId={donation._id}  />
    </div>
    {donation.comments.map(comment => <div>
    <Link to = {`/donations/${donation._id}/info/${comment._id}/update`}>Update Comment </Link>{comment.content}</div>)}
    

    </>
  )
}