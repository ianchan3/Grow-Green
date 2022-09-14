import './DonationListItem.css';
import { Link } from 'react-router-dom';
import * as donationsAPI from '../../utilities/donations-api';

export default function DonationListItem({ donation, isSelected, setSelectedDonation, routeChange, user }) {

  async function handleDelete(id){
    await donationsAPI.deleteDonation(id)
    routeChange("/donations")
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
        {donation.user === user._id && <button onClick={() => handleDelete(donation._id)}>Delete</button>}
  
        <br></br>
        <Link to ={`/donations/info/${donation._id}`}>Info</Link>

        </div>
    </div>
  );
}


// export default function EditDetail({ donation, handleChangeQty, handleUpdate }) {
//   if (!donation) return null;

//   const lineItems = donation.lineItems.map(item =>
//     <LineItem
//       lineItem={item}
//       isPaid={donation.isPaid}
//       handleChangeQty={handleChangeQty}
//       handleUpdate={handleUpdate}
//       key={item._id}
//     />
//   );

//   return (
//     <div className="DonationDetail">
//       <div className="section-heading">
//         {donation.isPaid ?
//           <span>DONATION <span className="smaller">{donation.donationId}</span></span>
//           :
//           <span>NEW DONATION</span>
//         }
//         <span>{new Date(donation.updatedAt).toLocaleDateString()}</span>
//       </div>
//       <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
//         {lineItems.length ?
//           <>
//             {lineItems}
//             <section className="total">
//               {donation.isPaid ?
//                 <span className="right">TOTAL&nbsp;&nbsp;</span>
//                 :
//                 <button
//                   className="btn-sm"
//                   onClick={handleUpdate}
//                   disabled={!lineItems.length}
//                 >Update</button>
//               }
//               <span>{donation.totalQty}</span>
//               <span className="right">${donation.donationTotal.toFixed(2)}</span>
//             </section>
//           </>
//           :
//           <div className="hungry">Donate?</div>
//         }
//       </div>
//     </div>
//   );
// }