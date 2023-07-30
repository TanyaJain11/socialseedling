

import React,{useState,useEffect} from 'react';
import Link from 'next/link';


import styles from '../styles/UserProfileHeader.module.css'; 

    const UserProfileHeader = ({ username, profileImage,darkMode }) => {
      const [isMediumOrLargeScreen, setIsMediumOrLargeScreen] = useState(true);

      useEffect(() => {
        const handleResize = () => {
          setIsMediumOrLargeScreen(window.innerWidth >= 768); 
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return (
        <header  className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
          <Link href="/">
          <div className={styles.appName}>socialSeedling</div>
          </Link>
          <div className={styles.userProfile}>
          {isMediumOrLargeScreen && <div className={styles.userName}>{username}</div>}
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
