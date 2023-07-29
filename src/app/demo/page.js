// // pages/NewsFeed.js
// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchRandomPhotos } from '../utils/unsplashApi';
// import UnsplashPhoto from '../utils/types.ts';
// import styles from './NewsFeed.module.css'; 

// const NewsFeed = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchPhotos();
//   }, []); 

//   const fetchPhotos = async () => {
//     try {
//       setLoading(true);
//       const response = await fetchRandomPhotos();
//       if (Array.isArray(response)) {
//         setPhotos((prevPhotos) => [...prevPhotos, ...response]);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching photos:', error);
//       setLoading(false);
//     }
//   };

// //   return (
// //     <div>
// //       <h1>News Feed</h1>
// //       <InfiniteScroll
// //         dataLength={photos.length}
// //         next={fetchPhotos}
// //         hasMore={hasMore}
// //         loader={<h4>Loading...</h4>}
// //         endMessage={<p>No more photos to display.</p>}
// //       >
// //         <div className={styles['grid-container']}>
// //           {photos.map((photo) => (
// //             <div key={photo.id} className={styles['grid-item']}>
// //               <Image
// //                 src={photo.urls?.small}
// //                 alt={photo.alt_description}
// //                 width={photo.width}
// //                 height={photo.height}
// //               />
             
// //             </div>
// //           ))}
// //         </div>
// //       </InfiniteScroll>
// //     </div>
// //   );
// return (
//     <div className="grid-container">
//       {photos.map((photo) => (
//         <div key={photo.id} className="grid-item">
//           <Image
//             src={photo.urls?.small}
//             alt={photo.alt_description}
//             width={photo.width}
//             height={photo.height}
//           />
//           <p>Likes: {photo.likes}</p>
//           {photo.location && (
//             <p>Location: {photo.location.city}, {photo.location.country}</p>
//           )}
//           {/* Add other photo details as desired */}
//         </div>
//       ))}
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default NewsFeed;
// pages/NewsFeed.js
// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchRandomPhotos } from '../utils/unsplashApi';
// import UnsplashPhoto from '../utils/types.ts';
// import styles from '../components/NewsFeed.module.css'; 
// import Link from 'next/link'; 
// const NewsFeed = () => {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchPhotos();
//   }, []); 

//   const fetchPhotos = async () => {
//     try {
//       setLoading(true);
//       const response = await fetchRandomPhotos();
//       console.log(response);
//       if (Array.isArray(response)) {
//         setPhotos((prevPhotos) => [...prevPhotos, ...response]);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching photos:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>News Feed</h1>
//       <InfiniteScroll
//         dataLength={photos.length}
//         next={fetchPhotos}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//         endMessage={<p>No more photos to display.</p>}
//       >
//         <div className={styles['grid-container']}>
//           {photos.map((photo) => (
//              <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
//             <div key={photo.id} className={styles['grid-item']}>
//               <Image
//                 src={photo.urls?.small}
//                 alt={photo.alt_description}
//                 width={photo.width}
//                 height={photo.height}
//               />
//               <p>{photo.topic_submission}</p>
//               <p>Likes: {photo.likes}</p>
//               {photo.location && (
//                 <p>Location: {photo.location.city}, {photo.location.country}</p>                
//               )}
//               <p className={styles['name']}>By:{photo.user.name}</p>
//               {/* Add other photo details as desired */}
              
//             </div>
//             </Link>
//           ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default NewsFeed;
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRandomPhotos } from '../utils/unsplashApi';
import UnsplashPhoto from '../utils/types.ts';
import styles from '../components/NewsFeed.module.css'; 
import Link from 'next/link'; 

const NewsFeed = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

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
      <h1>News Feed</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more photos to display.</p>}
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
                
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
