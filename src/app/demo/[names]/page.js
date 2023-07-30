// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { usePathname, useSearchParams } from 'next/navigation';
// import styles from '../../components/NewsFeed.module.css'; 
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Link from 'next/link'; 
// import UserProfileHeader from '../../components/UserProfileHeader'

// import { fetchUserPhotos } from '../../utils/unsplashApi'
// // import UnsplashPhoto from '../utils/types';

// export function NavigationEvents() {


//   return null;
// }


// const UserProfile = ({params}) => {
//     console.log(params)
//   const username = params.names;

//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [darkMode, setDarkMode] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//    const [Uname,setUname] = useState('');
//    const [Uprofile,setUprofile]=useState('');
  
//   useEffect(() => {
   
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setDarkMode(true);
//     }
//   }, []);

//   useEffect(() => {
  
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);


//   useEffect(() => {
//     const getUserPhotos = async () => {
//       try {
//         setLoading(true);
//         setError(''); 
//         const response = await fetchUserPhotos(username);
        
//          setUname(response[0].user.name);
//          setUprofile(response[0].user.profile_image.small);
//         console.log(response[0])
//         if (Array.isArray(response)) {
//           setPhotos(response);
//         } else {
//             setHasMore(false);        
//           setPhotos([]);
//         }
//       } catch (error) {
//         console.error('Error fetching user photos:', error);
//         setError('Error fetching user photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (username) {
//       getUserPhotos();
//     }
//   }, [username]);

//   return (
//     <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
//       <UserProfileHeader username={Uname} profileImage={Uprofile} darkMode={darkMode}/>
//     <h1>{username}</h1>
//     <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
//     <InfiniteScroll
//       dataLength={photos.length}
//       next={fetchUserPhotos}
//      hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
    
//     >
//       <div className={styles['grid-container']}>
//         {photos.map((photo) => (
//           <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
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
//           </Link>
//         ))}
//         {loading && <p>Loading...</p>}
//        {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
//        {error && <p>{error}</p>}
//       </div>
//     </InfiniteScroll>
//   </div>
// );
//   //   <div className={darkMode ? styles['dark-mode'] : styles['light-mode']}>
//   //      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
//   //      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
//   //     {photos.map((photo) => (
//   //       <div key={photo.id} className={styles['grid-item']}>
//   //         <Image
//   //           src={photo.urls.small}
//   //           alt={photo.alt_description}
//   //           width={photo.width}
//   //           height={photo.height}
//   //         />
//   //         {/* Add other photo details as desired */}
//   //       </div>
//   //     ))}
//   //     {loading && <p>Loading...</p>}
//   //     {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
//   //     {error && <p>{error}</p>}
//   //   </div>
//   // );
// };


// export default UserProfile;
// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import styles from '../../components/NewsFeed.module.css';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Link from 'next/link';
// import UserProfileHeader from '../../components/UserProfileHeader';
// import { fetchUserPhotos } from '../../utils/unsplashApi';
// import Card from '../../components/Card'; // Import the Card component
// import cardStyle from '../../Home.module.css'
// import { FaRegMoon } from 'react-icons/fa';
// import { FaSun } from 'react-icons/fa';


// const UserProfile = ({ params }) => {
//   const username = params.names;

//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [darkMode, setDarkMode] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [Uname, setUname] = useState('');
//   const [Uprofile, setUprofile] = useState('');
//   const [showCard, setShowCard] = useState(false); // State to manage the visibility of the Card component

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setDarkMode(true);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   useEffect(() => {
//     const getUserPhotos = async () => {
//       try {
//         setLoading(true);
//         setError('');
//         const response = await fetchUserPhotos(username);

//         setUname(response[0].user.name);
//         setUprofile(response[0].user.profile_image.small);
//         if (Array.isArray(response)) {
//           setPhotos(response);
//         } else {
//           setHasMore(false);
//           setPhotos([]);
//         }
//       } catch (error) {
//         console.error('Error fetching user photos:', error);
//         setError('Error fetching user photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (username) {
//       getUserPhotos();
//     }
//   }, [username]);

//   return (
//     <div className={darkMode ? cardStyle['dark-mode'] : cardStyle['light-mode']}>
//       <UserProfileHeader username={Uname} profileImage={Uprofile} darkMode={darkMode} />
//       <button className={` theme-toggle ${darkMode ? cardStyle['dark','theme-toggle'] : cardStyle['light','theme-toggle']}`} style={{"margin-left":"15px"}} onClick={() => setDarkMode(!darkMode)}>
//       {darkMode ? <FaRegMoon style={{"padding-left":"5px"}} size={20} color="black"/> : <FaSun style={{"padding-left":"5px"}} size={20} color="black"/>}</button>
//       <button style={{"position":"fixed","right":"122px"}} onClick={() => setShowCard((prevState) => !prevState)}>
//         {showCard ? 'Switch To List View' : 'Switch To Grid View'} {/* Toggle button text */}
//       </button>
//       <InfiniteScroll
//         dataLength={photos.length}
//         next={fetchUserPhotos}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//       >
//           <div className={showCard ? cardStyle['container'] : styles['grid-container']}>
//           {photos.map((photo) =>
//             showCard ? ( // If showCard is true, display the Card component
          
//             <div className={cardStyle['cardContainer']}>
//               <Card props={photo} darkMode={darkMode}/>
//               </div>
              
//             ) : (
            
//               <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
//                 <div key={photo.id} className={styles['grid-item']}>
//                   <Image
//                     src={photo.urls?.small}
//                     alt={photo.alt_description}
//                     width={photo.width}
//                     height={photo.height}
//                   />
//                   <p>{photo.topic_submission}</p>
//                   <p>Likes: {photo.likes}</p>
//                   {photo.location && (
//                     <p>
//                       Location: {photo.location.city}, {photo.location.country}
//                     </p>
//                   )}
//                   <p className={styles['name']}>By: {photo.user.name}</p>
//                   {/* Add other photo details as desired */}
//                 </div>
//               </Link>
              
//             )
//           )}
          
//           {loading && <p>Loading...</p>}
//           {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
//           {error && <p>{error}</p>}
//           </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default UserProfile;
// pages/user/[names].js
// "use client";
// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Link from 'next/link';
// import UserProfileHeader from '../../components/UserProfileHeader';
// import { useDispatch, useSelector } from 'react-redux';
// import { NextApiRequest, NextApiResponse } from 'next';
// import store from '../../../redux/store'; // Import the Redux store you created
// import { fetchUserPhotosAndCache } from '../../../redux/slice/apiSlice'; // Import your Redux actions
// import { fetchUserPhotos } from '../../utils/unsplashApi'; // Replace with your API function to fetch user photos
// import Card from '../../components/Card'; // Import the Card component
// import cardStyle from '../../Home.module.css';
// import { FaRegMoon } from 'react-icons/fa';
// import { FaSun } from 'react-icons/fa';

// const UserProfile = ({ params }) => {
//   const username = params.names;
//   const dispatch = useDispatch();
//   const apiData = useSelector((state) => state.api.data);
//   const isLoading = useSelector((state) => state.api.isLoading);
//   const error = useSelector((state) => state.api.error);

//   const [darkMode, setDarkMode] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [showCard, setShowCard] = useState(false); // State to manage the visibility of the Card component
//   const [loading, setLoading] = useState(true);
//   const [errors, setErrors] = useState('');
//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setDarkMode(true);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   useEffect(() => {
//     const getUserPhotos = async () => {
//       try {
//         setLoading(true);
//         setErrors('');
//         // Dispatch the async thunk with the username
//         await dispatch(fetchUserPhotosAndCache(username));
//       } catch (error) {
//         console.error('Error fetching user photos:', error);
//         setErrors('Error fetching user photos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (username) {
//       getUserPhotos();
//     }
//   }, [dispatch, username]);

//   return (
//     <div className={`${darkMode ? cardStyle['dark-mode'] : cardStyle['light-mode']}`}>
//       <p>{apiData}</p>
//       <p>{apiData}</p>

//       <UserProfileHeader username="Username" profileImage="profile_image_url" darkMode={darkMode} />
//       <button
//         className={`theme-toggle ${darkMode ? cardStyle['dark', 'theme-toggle'] : cardStyle['light', 'theme-toggle']}`}
//         style={{ marginLeft: '15px' }}
//         onClick={() => setDarkMode(!darkMode)}
//       >
//         {darkMode ? <FaRegMoon style={{ paddingLeft: '5px' }} size={20} color="black" /> : <FaSun style={{ paddingLeft: '5px' }} size={20} color="black" />}
//       </button>
//       <button style={{ position: 'fixed', right: '122px' }} onClick={() => setShowCard((prevState) => !prevState)}>
//         {showCard ? 'Switch To List View' : 'Switch To Grid View'} {/* Toggle button text */}
//       </button>
//       <InfiniteScroll
//         dataLength={apiData ? apiData.photos.length : 0}
//         // dataLength={photos.length}
//         next={fetchUserPhotos}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//       >
//         <div className={showCard ? cardStyle['container'] : cardStyle['grid-container']}>
//           {apiData &&
//             apiData.photos.map((photo) =>
//               showCard ? (
                
//                 // If showCard is true, display the Card component
//                 <div className={cardStyle['cardContainer']}>
//                   <Card props={{ photo }} darkMode={darkMode} />
//                 </div>
//               ) : (
                
//                 <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
//                   <div key={photo.id} className={cardStyle['grid-item']}>
//                     <Image
//                       src={photo.urls?.small}
//                       alt={photo.alt_description}
//                       width={photo.width}
//                       height={photo.height}
//                     />
//                     <p>{photo.topic_submission}</p>
//                     <p>Likes: {photo.likes}</p>
//                     {photo.location && (
//                       <p>
//                         Location: {photo.location.city}, {photo.location.country}
//                       </p>
//                     )}
//                     <p className={cardStyle['name']}>By: {photo.user.name}</p>
//                     {/* Add other photo details as desired */}
//                   </div>
//                 </Link>
//               )
//             )}
//           {isLoading && <p>Loading...</p>}
//           {!isLoading && apiData && apiData.photos.length === 0 && !error && <p>No photos found for this user.</p>}
//           {error && <p>{error}</p>}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default UserProfile;



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
import cardStyle from '../../Home.module.css';
import styles from '../../components/NewsFeed.module.css'
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
    // <div className={`${darkMode ? cardStyle['dark-mode'] : cardStyle['light-mode']}`}>
    //   <UserProfileHeader username="Username" profileImage="profile_image_url" darkMode={darkMode} />
    //   <button
    //     className={`theme-toggle ${darkMode ? cardStyle['dark', 'theme-toggle'] : cardStyle['light', 'theme-toggle']}`}
    //     style={{ marginLeft: '15px' }}
    //     onClick={() => setDarkMode(!darkMode)}
    //   >
    //     {darkMode ? <FaRegMoon style={{ paddingLeft: '5px' }} size={20} color="black" /> : <FaSun style={{ paddingLeft: '5px' }} size={20} color="black" />}
    //   </button>
    //   <button style={{ position: 'fixed', right: '122px' }} onClick={() => setShowCard((prevState) => !prevState)}>
    //     {showCard ? 'Switch To List View' : 'Switch To Grid View'} {/* Toggle button text */}
    //   </button>
    //   <InfiniteScroll
    //     dataLength={apiData ? apiData.photos.length : 0}
    //     next={fetchUserPhotos}
    //     hasMore={hasMore}
    //     loader={<h4>Loading...</h4>}
    //   >
    //     <div className={showCard ? cardStyle['container'] : cardStyle['grid-container']}>
    //       {photo.map((photo) =>
    //           showCard ? (
    //             // If showCard is true, display the Card component
    //             <div className={cardStyle['cardContainer']} key={photo.id}>
    //               <Card props={{ photo }} darkMode={darkMode} />
    //             </div>
    //           ) : (
    //             <Link key={photo.id} href={`/demo/${encodeURIComponent(photo.user.username)}`}>
    //               <div key={photo.id} className={cardStyle['grid-item']}>
    //                 <Image
    //                   src={photo.urls?.small}
    //                   alt={photo.alt_description}
    //                   width={photo.width}
    //                   height={photo.height}
    //                 />
    //                 <p>{photo.topic_submission}</p>
    //                 <p>Likes: {photo.likes}</p>
    //                 {photo.location && (
    //                   <p>
    //                     Location: {photo.location.city}, {photo.location.country}
    //                   </p>
    //                 )}
    //                 <p className={cardStyle['name']}>By: {photo.user.name}</p>
    //                 {/* Add other photo details as desired */}
    //               </div>
    //             </Link>
    //           )
    //         )}
    //       {isLoading && <p>Loading...</p>}
    //       {!isLoading && apiData && apiData.photos.length === 0 && !error && <p>No photos found for this user.</p>}
    //       {error && <p>{error}</p>}
    //     </div>
    //   </InfiniteScroll>
    // </div>
    <div className={darkMode ? cardStyle['dark-mode'] : cardStyle['light-mode']}>
       <UserProfileHeader username={Uname} profileImage={Uprofile} darkMode={darkMode} />
      <button className={` theme-toggle ${darkMode ? cardStyle['dark','theme-toggle'] : cardStyle['light','theme-toggle']}`} style={{"margin-left":"15px"}} onClick={() => setDarkMode(!darkMode)}>
       {darkMode ? <FaRegMoon style={{"padding-left":"5px"}} size={20} color="black"/> : <FaSun style={{"padding-left":"5px"}} size={20} color="black"/>}</button>
       <button style={{"position":"fixed","right":"122px"}} onClick={() => setShowCard((prevState) => !prevState)}>
         {showCard ? 'Switch To List View' : 'Switch To Grid View'} {/* Toggle button text */}
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
          
            <div className={cardStyle['cardContainer']}>
              <Card props={photo} darkMode={darkMode}/>
              </div>
              
            ) : (
            
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

