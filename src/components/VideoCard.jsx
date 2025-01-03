import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type = 'main' }) {
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;
  const thumbUrl = thumbnails.medium.url;

  const navigate = useNavigate();
  return (
    <div 
      className={`${type === 'side' ? 'grid grid-cols-2 w-full' : 'flex'} flex-wrap cursor-pointer`}
      onClick={() => navigate(`/videos/watch/${video.id}`)}
    >
        <img 
          className='rounded-md'
          src={thumbUrl} 
          alt={title}
        />
        <div
          className={`${type === 'side' ? 'pl-3.5' : ''}`}
        >
          <p className='text-white font-semibold my-2 line-clamp-2 text-xs md:text-base'>{title}</p>
          <p className='text-gray-400 text-xs'>{channelTitle}</p>
          <p className='text-gray-400 text-xs'>{formatAgo(publishedAt)}</p>
        </div>
    </div>
  )
}
