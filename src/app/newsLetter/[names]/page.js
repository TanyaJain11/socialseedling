
"use client";
// pages/[names].js
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import Image from 'next/image';
import UserProfileHeader from '../../components/UserProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPhotos } from '../../utils/unsplashApi';
import Card from '../../components/Card'; // Import the Card component
import cardStyle from '../../styles/Home.module.css';
import styles from '../../styles/NewsFeed.module.css'
import { FaRegMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { apiSuccess, apiFailure } from '../../../redux/slice/apiSlice'; // Import the necessary Redux actions


const UserProfile = ({ params }) => {
  const username = params.names;
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.data);
  const isLoading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);

  const [darkMode, setDarkMode] = useState(false);
  const [hasMore, setHasMore] = useState(true);
 const [Uname, setUname] = useState('');
 const [Uprofile, setUprofile] = useState('');
  const [showCard, setShowCard] = useState(false); // State to manage the visibility of the Card component
  const [loading, setLoading] = useState(true);
  const[photo,setPhoto]=useState([]);
  const [errors, setErrors] = useState('');
  useEffect(() => {
    console.log(apiData); // Check the value of apiData
  }, [apiData]);
  

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const getUserPhotos = async () => {
      try {
        setLoading(true);
        setErrors('');
        const response = await fetchUserPhotos(username);

        // Assuming the API response is an object with a "photos" property
        setPhoto(response);
        setUname(response[0].user.name);
         setUprofile(response[0].user.profile_image.small);
        console.log(response);
       

        // Manually update the Redux store with the fetched data
        dispatch(apiSuccess(response));
      } catch (error) {
        console.error('Error fetching user photos:', error);
        setErrors('Error fetching user photos. Please try again later.');
        dispatch(apiFailure('Error fetching user photos. Please try again later.'));
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      getUserPhotos();
    }
  }, [dispatch, username]);
  console.log(apiData);
  return (
    <div className={darkMode ? cardStyle['dark-mode'] : cardStyle['light-mode']}>
       <UserProfileHeader username={Uname} profileImage={Uprofile} darkMode={darkMode} />
      <button className={` theme-toggle ${darkMode ? cardStyle['dark','theme-toggle'] : cardStyle['light','theme-toggle']}`} style={{"marginLeft":"15px"}} onClick={() => setDarkMode(!darkMode)}>
       {darkMode ? <FaSun style={{"paddingLeft":"5px"}} size={20} color="black"/> :  <FaRegMoon style={{"paddingLeft":"5px"}} size={20} color="black"/> }</button>
       <button style={{"paddingLeft":"20px"}} onClick={() => setShowCard((prevState) => !prevState)}>
         {showCard ? 'Switch To Grid View' : 'Switch To List View'} {/* Toggle button text */}
       </button>
       <InfiniteScroll
        dataLength={photo.length}
        next={fetchUserPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
          <div className={showCard ? cardStyle['container'] : styles['grid-container']}>
          {photo.map((photo) =>
            showCard ? ( // If showCard is true, display the Card component
          
            <div key={photo.id} className={cardStyle['cardContainer']}>
              <Card props={photo} darkMode={darkMode}/>
              </div>
              
            ) : (
            
              <Link key={photo.id} href={`/newsLetter/${encodeURIComponent(photo.user.username)}`}>
                <div key={photo.id} className={styles['grid-item']}>
                  <img
                    src={photo.urls?.regular}
                    alt={photo.alt_description}
                    width={photo.width}
                    height={photo.height}
                  />
                  <p>{photo.topic_submission}</p>
                  <p>Likes: {photo.likes}</p>
                  {photo.location && (
                    <p>
                      Location: {photo.location.city}, {photo.location.country}
                    </p>
                  )}
                  <p className={styles['name']}>By: {photo.user.name}</p>
                  {/* Add other photo details as desired */}
                </div>
              </Link>
              
            )
          )}
          
          {loading && <p>Loading...</p>}
          {!loading && photo.length === 0 && !error && <p>No photos found for this user.</p>}
          {error && <p>{error}</p>}
          </div>
      </InfiniteScroll>
    </div>
  );
};

export default UserProfile;

