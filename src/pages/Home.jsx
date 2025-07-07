import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import "../css/Home.css"
import { searchMovies, getPopular } from "../Services/api"


function Home() {
const [searchQuery, setSearchQuery] = useState("")
const[movies,setMovies] = useState([]);
const [error,SetError] = useState(null);
const [loading,setloading] =  useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopular()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                SERVER_PROPS_EXPORT_ERROR("Failed to load Movies.")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            SetError(null)
        } catch (err){
            console.log(err)
            SetError("Failed to Search Movies...")
        } finally{
            setLoading(false)
        }

        setSearchQuery("")
    }

    return(
        <div className="home">
            <form onSubmit = {handleSearch} className="search-form">
                <input type = "text" placeholder="Search for Movies..."
                className="search-input"
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
                />
                <button type = "submit" className="search-button">Search
                </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            
        {loading ? (<div className="loading">
                Loading...
        </div> 
        ):(
        <div className="movies-grid">
            {movies.map((movie) => 
                ( <MovieCard movie={movie} key={movie.id} />
            )
            )}
        </div>
        )}
        </div>
    );
}

export default Home