import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {isLoading, error, data: channelList} = useQuery({
    queryKey: [channelId],
    queryFn: () => youtube.channels(channelId),
  });
  return (
    <section className='flex flex-wrap gap-y-2 py-6 md:py-2 md:pl-2 md:w-2/5 xl:w-1/4'>
       {isLoading && <p className='text-white'>Loading...</p>}
       {error && <p className='text-white'>{error.message}</p>}

      { channelList &&
      channelList.map( (list) => (
        <VideoCard key={list.id} video={list} type='side' />
      ))
      }
    </section>
  )
}
