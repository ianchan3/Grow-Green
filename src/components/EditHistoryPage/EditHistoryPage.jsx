import MenuList from "../MenuList/MenuList";
import DonationDetail from "../DonationDetail/DonationDetail";
import * as donationsAPI from '../../utilities/donations-api';
import { useNavigate } from 'react-router-dom';


export default function EditHistoryPage ({ menuItems, cart, setCart, donations }) {
  const navigate = useNavigate();

 
    
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
    <main>
        <MenuList
        menuItems={menuItems}
        handleAddToDonation={handleAddToDonation}
      />
      <DonationDetail 
      donation={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      />
      
      <button>Update Donation</button>
    </main>
  )
}