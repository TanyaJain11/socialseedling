import React from 'react';
import styles from './UserSuggestion.module.css';
import Link from 'next/link';

const UserSuggestions = ({props}) => {
const users = ['user1', 'user2', 'user3', 'user4'];
// console.log(props[0].user)
  return (
    <>
    <h3>Suggested Users</h3>
    <div className={styles['userSuggestions']}>
    
          
       <ul>
        {props.map((user) => (
             <Link key={user.id} href={`/demo/${encodeURIComponent(user.user.username)}`}>
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
    
    </>
  );
};

export default UserSuggestions;
