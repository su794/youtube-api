import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext';
import {useQuery} from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    data:url
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className='flex flex-wrap items-center'>
        {url &&
        <div 
          className='flex items-center justify-center bg-center bg-contain bg-no-repeat bg-white rounded-full w-8 h-8' 
          style={{backgroundImage: `url(${url})`}}></div>
        }
        <p className='text-white pl-2'>{name}</p> 
    </div>
  )
}
