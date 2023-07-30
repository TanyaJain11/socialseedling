// components/UserProfileHeader.js

import React from 'react';
import styles from './UserProfileHeader.module.css'; // Import the CSS module for styling

const UserProfileHeader = ({ username, profileImage,darkMode }) => {
  return (
    <header  className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.appName}>socialSeedling</div>
      <div className={styles.userProfile}>
        <div className={styles.userName}>{username}</div>
        {profileImage && (
          <div className={styles.userIcon}>
            <img src={profileImage} alt={username} className={styles.userImage} />
          </div>
        )}
        
      </div>
    </header>
  );
};

export default UserProfileHeader;
