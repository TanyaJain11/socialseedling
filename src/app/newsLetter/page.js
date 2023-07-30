"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRandomPhotos } from '../utils/unsplashApi';
import Card from '../components/Card';
import styles from '../styles/Home.module.css'
import UserSuggestions from '../components/UserSuggestions'
import ThemeToggle from '../components/ThemeToggle'
import { FaRegMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import UserProfileHeader from '../components/UserProfileHeader';
// import { FaBars } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const NewsFeed = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [username,setUsername] = useState([]);
  const [showUserSuggestions, setShowUserSuggestions] = useState(false);
  const [isMediumOrLargeScreen, setIsMediumOrLargeScreen] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []); 

  useEffect(() => {
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

  const toggleUserSuggestions = () => {
    setShowUserSuggestions((prevState) => !prevState);
  };

  return (
    <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
 
      <h1 className={styles['alignn']}>News Feed</h1>
      <button className={` theme-toggle ${darkMode ? styles['dark','theme-toggle'] : styles['light','theme-toggle']}`} style={{"marginLeft":"15px"}} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun style={{"paddingLeft":"5px"}} size={20} color="black"/> : <FaSun style={{"paddingLeft":"5px"}} size={20} color="black"/>}</button>
     
      {!isMediumOrLargeScreen && (
        <div className={styles['hamburger-icon']} onClick={toggleUserSuggestions}>
          <FaBars />
        </div>
      )}

      {(showUserSuggestions || isMediumOrLargeScreen) && (
        <UserSuggestions
          props={username}
        />
      )}
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more photos to display.</p>}
        priority
      >
      
        <div className={styles['container']} >
       
        {photos.map((photo) => (
            <div key ={photo.id} className={styles['cardContainer']}>
            <Card props={photo} darkMode={darkMode}/>
          </div>
          ))}
 
    </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
