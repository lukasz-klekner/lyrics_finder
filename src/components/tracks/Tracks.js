import { useContext } from 'react'
import { Context } from '../../context'
import Spinner from '../layout/Spinner'

const Tracks = () => {
  const { trackList } = useContext(Context)
  const isTrackListLoaded = !(
    trackList.length === 0 || trackList.length === undefined
  )

  return isTrackListLoaded ? <h1>Tracks loaded</h1> : <Spinner />
}

export default Tracks
