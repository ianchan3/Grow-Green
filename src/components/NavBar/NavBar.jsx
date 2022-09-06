import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main>
      <Link to='/'><Logo /></Link>
      <nav>
        <Link to='/donations'>Donation History</Link>
        &nbsp; | &nbsp;
        <Link to='/donations/new'>New Donation</Link>
        &nbsp; | &nbsp;
        Welcome, {user.name}
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    </main>
  );
}