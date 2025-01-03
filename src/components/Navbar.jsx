import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    const {keyword} = useParams();
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setSearchKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${searchKeyword}`);
    }

    useEffect( () => setSearchKeyword(keyword || ''), [keyword]);
  return (
    <header className='header flex items-center pb-2 mb-6 border-b border-gray-400'>
        <Link className='flex items-center' to='/'>
            <FaYoutube className='text-youtube-red text-lg' />
            <h1 className='font-bold text-xl text-white pl-2'>Youtube</h1>
        </Link>
        <div className='w-full flex justify-center'>
            <form onSubmit={handleSubmit} className='w-3/5 flex'>
                <input 
                    className='w-full p-2 outline-none bg-black text-white'
                    type='text' 
                    placeholder='Search...' 
                    value={searchKeyword} 
                    onChange={handleChange} 
                />
                <button onClick={handleSubmit} className='bg-zinc-700 p-4'>
                    <CiSearch className='text-white' />
                </button>
            </form>
        </div>
    </header>
  )
}
