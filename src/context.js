import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((response) => setTrackList(response.data.message.body.track_list))
      .catch((error) => console.log(error))
  }, [])

  return <Context.Provider value={{ trackList }}>{children}</Context.Provider>
}
