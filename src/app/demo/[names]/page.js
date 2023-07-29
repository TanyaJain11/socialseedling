"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from '../../components/NewsFeed.module.css'; 
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link'; 


import { fetchUserPhotos } from '../../utils/unsplashApi'
// import UnsplashPhoto from '../utils/types';

export function NavigationEvents() {


  return null;
}


const UserProfile = ({params}) => {
    console.log(params)
  const username = params.names;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
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
        setError(''); 
        const response = await fetchUserPhotos(username);
        if (Array.isArray(response)) {
          setPhotos(response);
        } else {
          setPhotos([]);
        }
      } catch (error) {
        console.error('Error fetching user photos:', error);
        setError('Error fetching user photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      getUserPhotos();
    }
  }, [username]);

  return (
    <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
    <h1>{username}</h1>
    <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    <InfiniteScroll
      dataLength={photos.length}
      next={fetchUserPhotos}
     
      loader={<h4>Loading...</h4>}
    
    >
      <div className={styles['grid-container']}>
        {photos.map((photo) => (
          <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
            <div key={photo.id} className={styles['grid-item']}>
              <Image
                src={photo.urls?.small}
                alt={photo.alt_description}
                width={photo.width}
                height={photo.height}
              />
              <p>{photo.topic_submission}</p>
              <p>Likes: {photo.likes}</p>
              {photo.location && (
                <p>Location: {photo.location.city}, {photo.location.country}</p>                
              )}
              <p className={styles['name']}>By:{photo.user.name}</p>
              {/* Add other photo details as desired */}
            </div>
          </Link>
        ))}
        {loading && <p>Loading...</p>}
       {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
       {error && <p>{error}</p>}
      </div>
    </InfiniteScroll>
  </div>
);
  //   <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
  //      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
  //      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
  //     {photos.map((photo) => (
  //       <div key={photo.id} className={styles['grid-item']}>
  //         <Image
  //           src={photo.urls.small}
  //           alt={photo.alt_description}
  //           width={photo.width}
  //           height={photo.height}
  //         />
  //         {/* Add other photo details as desired */}
  //       </div>
  //     ))}
  //     {loading && <p>Loading...</p>}
  //     {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
  //     {error && <p>{error}</p>}
  //   </div>
  // );
};

export default UserProfile;