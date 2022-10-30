import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import PilotProfile from '../PilotProfile/PilotProfile';

function UserPage() {
  
  return (
    <div className="container">
      
      <PilotProfile />
      <LogOutButton className="btn" />
    </div>
  );
}

export default UserPage;
