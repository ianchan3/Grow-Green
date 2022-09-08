import { useState, useEffect } from 'react';
import './DonationHistoryPage.css';
import * as donationsAPI from '../../utilities/donations-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import DonationList from '../../components/DonationList/DonationList';

export default function DonationHistoryPage({ user, setUser }) {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(function() {
    async function getDonations() {
      const donations = await donationsAPI.getAllForUser();
      setDonations(donations);
      setSelectedDonation(donations[0]);
    }
    getDonations();
  }, []);

  return (
    <main className="DonationHistoryPage">
      <aside>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <DonationList
        donations={donations}
        selectedDonation={selectedDonation}
        setSelectedDonation={setSelectedDonation}
      />
      <DonationDetail donation={selectedDonation} />
    </main>
  );
}