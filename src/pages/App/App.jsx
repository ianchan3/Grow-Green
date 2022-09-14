import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as donationsAPI from '../../utilities/donations-api';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewDonationPage from '../NewDonationPage/NewDonationPage';
import DonationHistoryPage from '../DonationHistoryPage/DonationHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import UpdateCommentForm from '../../components/UpdateCommentForm/UpdateCommentForm';
import DonationInfo from '../DonationInfo/DonationInfo';
import './App.css';

export default function App() {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };  

  const [user, setUser] = useState(getUser());
  const [donations, setDonations] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [selectedDonation, setSelectedDonation] = useState(null);


  useEffect(function() {
    async function getDonations() {
      const donations = await donationsAPI.getAllForUser();
      setDonations(donations);
      setSelectedDonation(donations[0]);
    }
    getDonations();
  }, []);


  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    }
    getItems();
    
    async function getCart() {
      const cart = await donationsAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function updateComment(comment, did, cid){
    let donations = await donationsAPI.updateComment(comment, did, cid) 
    setDonations(donations)
  }
  
  async function addComment(comment, did){
    let donations = await donationsAPI.addComment(comment, did) 
    setDonations(donations)
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/donations/new' element={<NewDonationPage user={user} setUser={setUser} menuItems={menuItems} cart={cart} setCart={setCart}/>} />
            <Route path='/donations' element={<DonationHistoryPage user={user} setUser={setUser} routeChange={routeChange} donations={donations} setDonations={setDonations} selectedDonation={selectedDonation} setSelectedDonation={setSelectedDonation} />} />
            <Route path='/donations/info/:id' element={<DonationInfo donations={donations} addComment={addComment}/>} />
            <Route path='/donations/:did/info/:cid/update' element={<UpdateCommentForm donations={donations} updateComment={updateComment}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
