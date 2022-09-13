import MenuList from "../MenuList/MenuList";
import EditDetail from "../EditDetail/EditDetail";
import * as donationsAPI from '../../utilities/donations-api';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
import LineItem from '../LineItem/LineItem';


export default function EditHistoryPage ({ setDonations, donations, cart, setCart }) {
  const { id } = useParams();
  const donation = donations.find(d => d._id === id);
  console.log(donations, id )
  const [selectedDonation, setSelectedDonation] = useState(donation);
  
  const lineItems = selectedDonation.lineItems.map(item =>
    <LineItem
    lineItem={item}
    isPaid={false} 
    handleChangeQty={handleChangeQty}
    key={item._id}
  />)


  // useEffect(() => {
  //   function filterDonation () {
  //      let cart = donations.filter(function(d){
  //        if (d._id === id) return d
  //      });
  //      setUpdateCart(cart)
  //    }
  //    filterDonation();  
  //  }, [selectedDonation]);  

  //    if (updateCart === null) return null;

   
   console.log(selectedDonation.lineItems[0])
  
     function handleChangeQty(itemId, newQty) {   
      let updatedDonation = selectedDonation;
      for (let i = 0; i < selectedDonation.lineItems.length; i++ ) {
        if (selectedDonation.lineItems[i].item._id === itemId) {
          updatedDonation.lineItems[i].qty = newQty
        }
      }
      setSelectedDonation(updatedDonation)
    }

   async function handleUpdate() {
     await donationsAPI.update();
     navigate('/donations');
   }
  return (
 <main>
       {lineItems}



      {/* <EditDetail 
      donation={cart}
      handleChangeQty={handleChangeQty}
      handleUpdate={handleUpdate}
      /> */}
      
      <button>Update Donation</button>
    </main> 
  )
}
//   useEffect(function() {
//     async function getDonations() {
//       const userDonations = await donationsAPI.getAllForUser();
//       setDonations([...donations, userDonations]);
//       setSelectedDonation(userDonations);
//     }
//     getDonations();
//   }, [setDonations]);
  
//   console.log(donation)
    
//   return (
//     <>
//       <h1>Hi</h1>
//       <CommentForm setDonations={setDonations} id={id}  />
//       {donation.reviews.map(review => <div>{review.content}</div>)}
//     </>
//   )
// }