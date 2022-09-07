import DonationListItem from '../DonationListItem/DonationListItem';
import './DonationList.css';

export default function DonationList({ donations, selectedDonation, setSelectedDonation }) {
  const donationListItems = donations.map(d =>
    <DonationListItem
      donation={d}
      isSelected={d === selectedDonation}
      setSelectedDonation={setSelectedDonation}
      key={d._id}
    />
  );
  return (
    <main className="DonationList">
      {donationListItems}
    </main>
  );
}