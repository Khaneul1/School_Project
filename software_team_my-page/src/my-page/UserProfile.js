import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './UserProfile.css';

const UserProfile = () => {
  const [userID, setUserID] = useState('haneul1212');

  return (
    <div>
      <div className="user-profile-container">
        <div className="user-profile-box">
          <AccountCircleIcon className="user-profile-icon" />
          <span>{userID}</span>
        </div>
        <span className="profile-today-text">오늘도 건강하세요!</span>
      </div>
    </div>
  );
};

export default UserProfile;
