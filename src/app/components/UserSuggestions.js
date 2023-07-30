// import React from 'react';
// import styles from '../styles/UserSuggestion.module.css';
// import Link from 'next/link';

// const UserSuggestions = ({props,classs}) => {
//   return (
//     <>
//     <h3>Suggested Users</h3>
//     <div className={`${styles['userSuggestions']} ${classs}`}>
    
          
//        <ul>
//         {props.map((user) => (
//              <Link key={user.id} href={`/demo/${encodeURIComponent(user.user.username)}`}>
//           <li key={user}>
//             <img
//             src={user.user.profile_image?.small}
//             alt="User Profile"
//             className={styles['profileImage']}
//             width="100px"
//             height="100px"
//           />
//           <span className={styles['username']}>{user.user.username}</span>
//           </li>
//           </Link>
//         ))}
//       </ul> 
//     </div>
    
//     </>
//   );
// };

// export default UserSuggestions;
import React, { useState, useEffect } from 'react';
import styles from '../styles/UserSuggestion.module.css';
import Link from 'next/link';

const UserSuggestions = ({ props }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint if needed
    };

    handleResize(); // Set the initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className={styles['user-suggestions-small']}>
          {/* <h3>Suggested Users</h3> */}
          <ul>
            {props.map((user) => (
              <Link key={user.id} href={`/newsLetter/${encodeURIComponent(user.user.username)}`}>
                <li key={user}>
                  <img
                    src={user.user.profile_image?.small}
                    alt="User Profile"
                    className={styles['profileImage']}
                    width="30px"
                    height="30px"
                  />
                  <span className={styles['username']}>{user.user.username}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles['user-suggestions-large']}>
          
          <ul>
            {props.map((user) => (
              <Link key={user.id} href={`/newsLetter/${encodeURIComponent(user.user.username)}`}>
                <li key={user}>
                  <img
                    src={user.user.profile_image?.small}
                    alt="User Profile"
                    className={styles['profileImage']}
                    width="100px"
                    height="100px"
                  />
                  <span className={styles['username']}>{user.user.username}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserSuggestions;
