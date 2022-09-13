import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DonationHistoryPage.css';
import * as donationsAPI from '../../utilities/donations-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import DonationList from '../../components/DonationList/DonationList';

export default function DonationHistoryPage({ user, setUser, donations, setDonations }) {
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
    <>
    <main className="DonationHistoryPage">
      <aside>
      <Link to="/donations/new" className="button btn-sm">NEW DONATION</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <DonationList
        donations={donations}
        selectedDonation={selectedDonation}
        setSelectedDonation={setSelectedDonation}
      />
      <DonationDetail donation={selectedDonation} />

    </main>
    </>
  );
}