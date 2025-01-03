import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { YoutubeApiProvider } from '../context/YoutubeApiContext';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar />
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
    </div>
  )
}
