import { Route } from 'react-router-dom'
import "./css/App.css"
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes} from "react-router-dom"
import Favorites from './pages/Favorites'
import NavBar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  

  return ( 
    <MovieProvider>
      <NavBar />
      <main className="main-content">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/favorites" element = {<Favorites />}/>

      </Routes>

      </main>
      </MovieProvider>
  )
}

export default App
