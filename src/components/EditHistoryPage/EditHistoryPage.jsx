import MenuList from "../MenuList/MenuList";
import EditDetail from "../EditDetail/EditDetail";
import * as donationsAPI from '../../utilities/donations-api';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EditHistoryPage ({ menuItems, donations }) {
  const [updateCart, setUpdateCart] = useState(null)
  const navigate = useNavigate();
  const {id} = useParams();
 
  useEffect(() => {
    function filterDonation () {
      let cart = donations.filter(function(d){
        if (d._id === id) return d
      });
      setUpdateCart(cart)
    }
    filterDonation();  
  }, [id]);  

    if (updateCart === null) return null;

    async function handleAddToDonation(itemId) {
      const updatedCart = await donationsAPI.addItemToCart(itemId);
      setCart(updatedCart);
    }
  
    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await donationsAPI.setItemQtyInCart(itemId, newQty);
      setCart(updatedCart);
    }
  
    async function handleUpdate() {
      await donationsAPI.update();
      navigate('/donations');
    }
      
    
  return (
    <main>
        <MenuList
        menuItems={menuItems}
        handleAddToDonation={handleAddToDonation}
      />
      <EditDetail 
      donation={cart}
      handleChangeQty={handleChangeQty}
      handleUpdate={handleUpdate}
      />
      
      <button>Update Donation</button>
    </main>
  )
}