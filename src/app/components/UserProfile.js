import React, { useState, useEffect } from 'react';
import { fetchUserPhotos } from '../utils/unsplashApi';
// import { UnsplashPhoto } from '../utils/types';

const UserProfile = ({ username }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserPhotos = async () => {
      try {
        setLoading(true);
        setLoading(true);
        const response = await fetchUserPhotos(username);
        setPhotos(response);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching photos for user ${username}:`, error);
        setLoading(false);
      }
    };

    getUserPhotos();
  }, [username]);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <h2>{`Photos added by ${username}`}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : photos.length === 0 ? (
        <p>No photos found for this user.</p>
      ) : (
        <div className="grid-container">
          {photos.map((photo) => (
            <div key={photo.id} className="grid-item">
              <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;