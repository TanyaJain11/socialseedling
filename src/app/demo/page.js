"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRandomPhotos } from '../utils/unsplashApi';
import UnsplashPhoto from '../utils/types.ts';
// import styles from '../components/NewsFeed.module.css'; 
import Link from 'next/link'; 
import Card from '../components/Card';
import styles from '../Home.module.css'
import UserSuggestions from '../components/Usersuggestions'
import ThemeToggle from '../components/ThemeToggle'
import { FaRegMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import UserProfileHeader from '../components/UserProfileHeader';

const NewsFeed = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [username,setUsername] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []); 

  useEffect(() => {
    // Apply the selected theme from local storage on mount
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update the theme in local storage when darkMode state changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetchRandomPhotos();
      console.log(response);
      setUsername(response)
      if (Array.isArray(response)) {
        setPhotos((prevPhotos) => [...prevPhotos, ...response]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    }
  };



  return (
    <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
      <UserProfileHeader username={NewsFeed} profileImage={null} darkMode={darkMode}/>
      <h1>News Feed</h1>
      <button className={` theme-toggle ${darkMode ? styles['dark','theme-toggle'] : styles['light','theme-toggle']}`} style={{"marginLeft":"15px"}} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaRegMoon style={{"paddingLeft":"5px"}} size={20} color="black"/> : <FaSun style={{"paddingLeft":"5px"}} size={20} color="black"/>}</button>
    
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more photos to display.</p>}
      >
        {/* <div className={styles['grid-container']}>
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
                
              </div>
            </Link>
          ))}
        </div> */}
        <div className={styles['container']} >
       
        {photos.map((photo) => (
            <div key ={photo.id} className={styles['cardContainer']}>
            <Card props={photo} darkMode={darkMode}/>
            {/* setUsername((prevusername) => [...prevusername, ...]); */}
          </div>
          ))}
      <UserSuggestions props={username} />
    </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
