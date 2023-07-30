import React from 'react';
import styles from '../Home.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

const Card = ({props,darkMode}) => {
  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <img
          src={props.urls?.small}
          alt="User Profile"
          className={styles.profileImage}
          width="100px"
          height="100px"
        />
        <p className={styles.username}>{props.user.name}</p>
      </div>
      <img
        src={props.urls?.small}
        alt={props.topic_submission}
        className={styles.postImage}
      />
      <div>
      <div className={styles.likes}>.
      
        {/* <span className={styles.likeIcon}>❤️</span> */}
        <AiOutlineHeart className={styles.likeIcon} size={32}/>
 
        <span className={styles.likeCount}>Likes:{props.likes}</span>
       {props.location?.country!=null?
                  <span style={{["display"]:"flex",["justifyContent"]:"end"}}><FaLocationDot className={styles.likeIcon} size={20}/>{props.location?.country}</span>                
                :<></>}
      </div>
      <div style={{["display"]:"flex",["justifyContent"]:"start",["paddingLeft"]:"20px"}}>
        <span>{props.views}</span>
        <span style={{["justifyContent"]:"end"}}>{props.topic_submission}</span>
      </div>
      </div>
      {/* <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className={styles.profileImage}
        />
        <p className={styles.username}>john_doe</p>
      </div>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Post"
        className={styles.postImage}
      />
      <div className={styles.likes}>
        <span className={styles.likeIcon}>❤️</span>
        <span className={styles.likeCount}>Likes: 100</span>
      </div> */}
    </div>
  );
};

export default Card;

