import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DonationHistoryPage.css';
import * as donationsAPI from '../../utilities/donations-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
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