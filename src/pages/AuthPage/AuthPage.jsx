import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main>
      <Logo />
      <h1>{showLogin ? 'Customer Log In ' : 'Create Account'}</h1>
      <button id="Toggle-Auth" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up ' : 'Log In'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
    </main>
  );
}