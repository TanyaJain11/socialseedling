// utils/unsplashApi.js
const API_KEY = 'EgAz68mnXErXB8UQvtRpSIDlO8DLGbxBszUpcFZ0Xpk';
const API_URL = 'https://api.unsplash.com';
import axios from 'axios';

const UPLOAD_URL = 'https://api.unsplash.com/photos';

export const fetchRandomPhotos = async () => {
  try {
    const response = await fetch(`${API_URL}/photos/random?count=10`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch random photos from Unsplash.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random photos:', error);
    return [];
  }
};

export const fetchUserPhotos = async (username) => {
  const url = `${API_URL}/users/${username}/photos?client_id=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch user photos.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user photos:', error);
    throw error;
  }
};


