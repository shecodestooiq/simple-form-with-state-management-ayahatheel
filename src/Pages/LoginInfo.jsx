import React, { useContext } from 'react';
import UserContext from '../UserContext';
import './LoginInfo.css';

function LoginInfo() {
  const { user } = useContext(UserContext);

  return (
    <div className='main-container2'>
      <h2>Your Details are</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <h4>keep them in a safe place</h4>
    </div>
  );
}

export default LoginInfo;
