export const fetchRandomPhotos = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=10`, {
      headers: {
        Authorization: `Client-ID EgAz68mnXErXB8UQvtRpSIDlO8DLGbxBszUpcFZ0Xpk`,
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
// ${process.env.API_KEY}
// ${process.env.API_URL}
export const fetchUserPhotos = async (username) => {
  const url = `https://api.unsplash.com/users/${username}/photos?client_id=EgAz68mnXErXB8UQvtRpSIDlO8DLGbxBszUpcFZ0Xpk`;

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


