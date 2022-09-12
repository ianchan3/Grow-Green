import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as donationsAPI from '../../utilities/donations-api';
import './NewDonationPage.css';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import MenuList from '../../components/MenuList/MenuList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewDonationPage({ user, setUser, menuItems, cart, setCart }) {
  const navigate = useNavigate();



  /*--- Event Handlers ---*/

  async function handleAddToDonation(itemId) {
    const updatedCart = await donationsAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await donationsAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await donationsAPI.checkout();
    navigate('/donations');
  }

  return (
    <main className="NewDonationPage">
      <aside>
       
        <Link to="/donations" className="button btn-sm">PREVIOUS DONATIONS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems}
        handleAddToDonation={handleAddToDonation}
      />
      <DonationDetail
        donation={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
 
