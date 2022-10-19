import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import PilotProfile from '../PilotProfile/PilotProfile';

function UserPage() {
  
  return (
    <div className="container">
      <h2>Welcome,</h2>
      <PilotProfile />
      <LogOutButton className="btn" />
    </div>
  );
}

export default UserPage;
