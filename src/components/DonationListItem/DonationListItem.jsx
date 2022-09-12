import './DonationListItem.css';
import { Link } from 'react-router-dom';
import * as donationsAPI from '../../utilities/donations-api';


export default function DonationListItem({ donation, isSelected, setSelectedDonation, routeChange }) {

  async function handleDelete(id){
    await donationsAPI.deleteDonation(id)
    routeChange("/donations")
  }
  
  async function handleUpdate(id){
    await donationsAPI.updateDonation(id)
  }
  

  return (
    <div
      className={`DonationListItem${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedDonation(donation)}
    >
      <div>
        <div>Donation Id: <span className="smaller">{donation.donationId}</span></div>
        <div className="smaller">{new Date(donation.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${donation.donationTotal.toFixed(2)}</div>
        <div className="smaller">{donation.totalQty} Item{donation.totalQty > 1 && 's'}</div>
        <button onClick={() => handleDelete(donation._id)}>Delete</button>   
        <Link to ={`/donations/edit/${donation._id}`}>Edit</Link>
        </div>
    </div>
  );
}