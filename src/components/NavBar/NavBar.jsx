import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main>
      
      <nav>
        <Link to='/'><Logo /></Link>
        Welcome {user.name}!
        
        <Link id="navbar" to='/donations'>Donation History</Link>
        
        <Link id="navbar" to='/donations/new'>New Donation</Link>
        
        <Link id='navbar' to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    </main>
  );
}