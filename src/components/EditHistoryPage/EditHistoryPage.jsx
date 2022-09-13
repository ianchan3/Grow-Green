import MenuList from "../MenuList/MenuList";
import EditDetail from "../EditDetail/EditDetail";
import * as donationsAPI from '../../utilities/donations-api';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';


export default function EditHistoryPage ({ setDonations, donations }) {
  const { id } = useParams();
  const donation = donations.find(d => d._id == id);
  
  const [selectedDonation, setSelectedDonation] = useState(null);
  
  
  useEffect(function() {
    async function getDonations() {
      const userDonations = await donationsAPI.getAllForUser();
      setDonations([...donations, userDonations]);
      setSelectedDonation(userDonations);
    }
    getDonations();
  }, [setDonations]);
  
  console.log(donation)
    
  return (
    <>
      <h1>Hi</h1>
      <CommentForm setDonations={setDonations} id={id}  />
      {donation.reviews.map(review => <div>{review.content}</div>)}
    </>
  )
}




