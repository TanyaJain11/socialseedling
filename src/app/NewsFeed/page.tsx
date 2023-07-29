// pages/NewsFeed.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRandomPhotos } from '../utils/unsplashApi';
import UnsplashPhoto from '../utils/types';
// import styles from './NewsFeed.module.css'; // Import the CSS module

const NewsFeed = () => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPhotos();
  }, []); 

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetchRandomPhotos();
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
    <div>
      <h1>News Feed</h1>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more photos to display.</p>}
      >
        <div>
          {photos.map((photo) => (
            <div key={photo.id} >
              <Image
                src={photo.urls?.small}
                alt={photo.alt_description}
                width={photo.width}
                height={photo.height}
              />
       
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
