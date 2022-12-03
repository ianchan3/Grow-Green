import './DonationHistoryPage.css';
import DonationList from '../../components/DonationList/DonationList';

export default function DonationHistoryPage({ user, setUser, donations, setDonations, selectedDonation, setSelectedDonation }) {
  return (
    <>
      <main className="DonationHistoryPage">
        
        <DonationList
          user={user}
          donations={donations}
          selectedDonation={selectedDonation}
          setSelectedDonation={setSelectedDonation}
        />
      </main>
    </>
  );
}