import MenuListItem from "../MenuListItem/MenuListItem";
// import * as donationsAPI from '../../utilities/donations-api';

export default function EditHistoryPage ({ menuItems, handleAddToDonation }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToDonation={handleAddToDonation}
    />
    );
    
    // {donations.map(donations => <> <MenuList donation={donations} key={donations._id} /> <button>Update</button></>)}
      
    
  return (
    <div>
      {items}
      <h1>Hi</h1>
      <button>Update</button>
    </div>
  )
}