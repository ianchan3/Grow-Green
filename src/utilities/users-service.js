// Service modules are where we put our
// "business"/application logic
// For example, when we signup or log in, 
// we will need to save the token we received 
// from the server - is that type of code
// good to put in the React component?
// NO!

import * as usersAPI from './users-api';

export async function signUp(userData) {

  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
 
  const token = await usersAPI.login(credentials);

  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}