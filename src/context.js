import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([
    {
      track: { track_name: 'abc' },
    },
    {
      track: { track_name: '123' },
    },
  ])

  return <Context.Provider value={{ trackList }}>{children}</Context.Provider>
}
