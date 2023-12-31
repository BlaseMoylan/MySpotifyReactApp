
import React from 'react';
import APIKit from '../../spotify';
import { useState, useEffect } from 'react';
import './library.css';
import { CgPlayButtonR } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

/**
 * Library component for displaying user playlists.
 */
export default function Library() {
  const [playlist, setPlaylist] = useState(null);
  const navigate = useNavigate();

  /**
   * Fetches user playlists from the API.
   */

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await APIKit.get('me/playlists');
        setPlaylist(response.data.items);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
  
  /**
   * Handles the click event on a playlist card and navigates to the player page.
   * @param {string} id - Playlist ID.
   */
  const playPlaylist = (id) => {
    navigate('/player', { state: { id: id } });
  };
console.log(playlist)
  return (
    <div className='page-container library-main'>
      <div className='library-body'>
        {playlist?.map((playlist) => (
          <div className='playlist-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            {playlist.images[0] ? (
              <img src={playlist.images[0].url} className='playlist-image' alt='playlist img' />
            ) : (
              <img
                src='https://th.bing.com/th/id/R.0c12d2fd4673dee91a743aecb340d6e6?rik=B1IyQZsF2%2fF6vA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_148071.png&ehk=wacpDthkV%2fQSfOLelWSsYQFabLKAVjXh1pZAq0%2fe3gU%3d&risl=&pid=ImgRaw&r=0'
                className='playlist-image-non'
                alt='playlist img'
              />
            )}
            <p className='playlist-name'>{playlist.name}</p>
            <div className='playButton'>
              <IconContext.Provider value={{ size: '30%' }}>
                <CgPlayButtonR />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}