import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index'
import { ContextProvider } from './context'
import Lyrics from './components/tracks/Lyrics'

function App() {
  return (
    <ContextProvider>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextProvider>
  )
}

export default App
