import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites( ) {
    const{Favorites} = useMovieContext();
    if(Favorites){
        return(
            <div className="favorites">
            <div className="movies-grid">
            {Favorites.map((movie) => 
                ( <MovieCard movie={movie} key={movie.id} />
            )
            )}
        </div>
        </div>
        )
    } 

return <div className=""favorites-empty>
    <h2>No Favorite Movies yet</h2>
    <p>Start adding your favorite movies here</p>

</div>

}

export default Favorites