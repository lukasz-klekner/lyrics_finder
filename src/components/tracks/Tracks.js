import { useContext } from 'react'
import { Context } from '../../context'

const Tracks = () => {
  const { trackList } = useContext(Context)

  console.log(trackList)
  return <h1>Tracks</h1>
}

export default Tracks
