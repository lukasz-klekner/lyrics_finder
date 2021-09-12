import { useContext } from 'react'
import { Context } from '../../context'
import Spinner from '../layout/Spinner'
import Track from './Track'

const Tracks = () => {
  const { trackList } = useContext(Context)
  const isTrackListLoaded = !(
    trackList.length === 0 || trackList.length === undefined
  )

  return isTrackListLoaded ? (
    <>
      <h3 className='text-center mb-4'>Top 10 tracks</h3>
      <div className='row'>
        {trackList.map((item) => (
          <Track key={item.track.track_id} track={item.track} />
        ))}
      </div>
    </>
  ) : (
    <Spinner />
  )
}

export default Tracks
