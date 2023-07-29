"use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { usePathname, useSearchParams } from 'next/navigation';

// import { fetchUserPhotos } from '../utils/unsplashApi';
// import UnsplashPhoto from '../utils/types';

// export function NavigationEvents() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Only run the effect on the client-side
//       const url = `${pathname}?${searchParams}`;
//       console.log(url);
//       // You can now use the current URL
//       // ...
//     }
//   }, [pathname, searchParams]);

//   return null;
// }


// const UserProfile = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const urlSearchParams = new URLSearchParams(Object.fromEntries(searchParams.entries()));
//   const username = urlSearchParams.get('username');

//   const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const getUserPhotos = async () => {
//       try {
//         setLoading(true);
//         setError(''); // Reset the error state
//         const response = await fetchUserPhotos(username as string);
//         if (Array.isArray(response)) {
//           setPhotos(response);
//         } else {
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
//     <div className="grid-container">
//       {photos.map((photo) => (
//         <div key={photo.id} className="grid-item">
//           <Image
//             src={photo.urls.small}
//             alt={photo.alt_description}
//             width={photo.width}
//             height={photo.height}
//           />
//           {/* Add other photo details as desired */}
//         </div>
//       ))}
//       {loading && <p>Loading...</p>}
//       {!loading && photos.length === 0 && !error && <p>No photos found for this user.</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default UserProfile;
import UserProfile from '../components/UserProfile';

const UserPage = () => {
  return (
    <div>
      <UserProfile username="Laura Chouette" />
    </div>
  );
};

export default UserPage;
