import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const {keyword} = useParams();
  const { youtube } = useYoutubeApi ();
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60 * 1,
  });

  return (
    <div className='pt-3'>
      {isLoading && <p className='text-white'>Loading...</p>}

      {error && <p className='text-white'>{error.message} {videos}</p>}

      {videos && 
        <ul className='grid grid-cols-2 gap-1 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5'>
        {videos.map((video) => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </ul>
      }
      
    </div>
  )
}