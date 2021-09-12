import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import Moment from 'react-moment'

const Lyrics = () => {
  const { id } = useParams()
  const [lyrics, setLyrics] = useState({})
  const [track, setTrack] = useState({})

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((response) => setLyrics(response.data.message.body.lyrics))
      .catch((error) => console.log(error))
  }, [id])

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((response) => {
        console.log(response.data.message.body.track)
        setTrack(response.data.message.body.track)
      })
      .catch((error) => console.log(error))
  }, [id])

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />
  } else {
    return (
      <>
        <Link to='/' className='btn btn-dark btn-sm mb-4'>
          Go Back
        </Link>
        <div className='card'>
          <h5 className='card-header'>
            {track.track_name} by
            <span className='text-secondary'>{track.artist_name}</span>
          </h5>
          <div className='card-body'>
            <p className='card-text'>{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className='list-group mt-3'>
          <li className='list-group-item'>
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className='list-group-item'>
            <strong>Song Genre</strong>:{' '}
            {track.primary_genres.music_genre_list.length === 0
              ? 'NO GENRE AVAILABLE'
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className='list-group-item'>
            <strong>Explicit Words</strong>:{' '}
            {track.explicit === 0 ? 'No' : 'Yes'}
          </li>
          <li className='list-group-item'>
            <strong>Updating Date</strong>:{' '}
            <Moment format='DD/MM/YYYY'>{track.updated_time}</Moment>
          </li>
        </ul>
      </>
    )
  }
}

export default Lyrics
