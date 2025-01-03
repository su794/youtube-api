import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from './ChannelInfo';

export default function VideoDetail() {
    const {videoId} = useParams();
    const { youtube } = useYoutubeApi();
    const {isLoading, error, data: videoDetail} = useQuery({
      queryKey: [videoId],
      queryFn: () => youtube.detail(videoId),
    });

  return (
    <>
      <section className='flex-wrap md:flex'>
        {isLoading && <p className='text-white'>Loading...</p>}

        {error && <p className='text-white'>{error.message}</p>}

        <div className='md:w-3/5 xl:w-3/4'>
          <iframe 
            id="player" 
            type="text/html" 
            width="100%" 
            height="640"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoDetail ? videoDetail.snippet.title : videoId}
          ></iframe>
          <div>
            
            {videoDetail && 
            <>
              <h2 className='text-white text-xl font-bold py-8'>{videoDetail.snippet.title}</h2>
              <ChannelInfo id={videoDetail.snippet.channelId} name={videoDetail.snippet.channelTitle} />
              <p className='text-white text-xs'>{videoDetail.snippet.description}</p> 
            </>
            }
            
          </div>
        </div>
        
        {videoDetail && <RelatedVideos channelId={videoDetail.snippet.channelId} />}
      </section>
    </>
  )
}
