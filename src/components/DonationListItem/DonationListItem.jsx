import './DonationListItem.css';


export default function DonationListItem({ donation, isSelected, setSelectedDonation }) {
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
      </div>
    </div>
  );
}