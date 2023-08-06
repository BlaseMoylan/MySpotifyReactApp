
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
  const [favorites, setFavorites] = useState(null)
  const navigate = useNavigate();

  /**
   * Fetches user playlists from the API.
   */
  useEffect(() => {
    APIKit.get('me/playlists').then(function (response) {
      setPlaylist(response.data.items);
      console.log("ladladlhgoaehoghadlh")
      console.log(response.data.items);
    });
    // need to get all tracks by following 'next' given url
    APIKit.get('me/tracks').then(function (response){
      setFavorites(response.data)
      console.log("test 321")
      console.log(response.data)
      
    })
    // this is the code snip it given by chat gpt need to figure out how to get it Integrated

    
    // def get_all_favorite_tracks(access_token):
    // headers = {
    //     "Authorization": f"Bearer {access_token}"
    // }
    // all_favorite_tracks = []

    // next_url = "https://api.spotify.com/v1/me/tracks"
    // while next_url:
    //     response = requests.get(next_url, headers=headers)
    //     if response.status_code == 200:
    //         data = response.json()
    //         all_favorite_tracks.extend(data["items"])
    //         next_url = data["next"]  # Get the URL for the next page of results
    //     else:
    //         print("Error:", response.status_code)
    //         return None

    // return all_favorite_tracks


  }, [])

  /**
   * Handles the click event on a playlist card and navigates to the player page.
   * @param {string} id - Playlist ID.
   */
  const playPlaylist = (id) => {
    navigate('/player', { state: { id: id } });
  };

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