
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import Feed from '../feed/feed';
import Favorites from '../favorites/favorites';
import './home.css';
import Sidebar from '../../components/sidebar';
import Login from '../auth/login';
import { setCleintToken } from '../../spotify';

/**
 * Home component represents the main page of the application.
 * It handles authentication, renders the sidebar, and sets up routes for different pages.
 */
export default function Home() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check if token exists in local storage
    const storedToken = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';

    if (!storedToken && hash) {
      // Token is present in hash, save it in local storage and set as the current token
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
      setCleintToken(_token);
    } else {
      // Token is already stored, use it as the current token
      setToken(storedToken);
      setCleintToken(storedToken);
    }
  }, []);

  // If token is not available, render the login component
  if (!token) {
    return <Login />;
  }

  return (
    <Router>
      <div className='main-body'>
        <Sidebar />
        <Routes>
          <Route path='/library' element={<Library />} />
          <Route path='/player' element={<Player />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}