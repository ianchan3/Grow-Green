import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToDonation }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToDonation={handleAddToDonation}
    />
    );
   
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}