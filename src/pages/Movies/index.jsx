import "./style.css";
import { useState } from "react";
import Header from "../../components/Header";
import Filme from "../../components/Filme";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    async function addMovie() {
        const response = await fetch(`${process.env.REACT_APP_BASE_TMDB_URL}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_TMDB_KEY}`
            }
        });
        
        const data = await response.json();

        setMovies([...data.results, ...movies])
    }



    return(
        <main id="movies">
            <Header />
            <div className="movies-list">
            <button onClick={addMovie}>Listar filmes</button>
                {movies.map((movie, index) => {
                        return(
                            <Filme
                                key={index}
                                title={movie.original_title}
                                length={movie.vote_average}
                                data={movie.release_date}
                                poster={`${process.env.REACT_APP_API_TMDB_IMG_URL}/${movie.poster_path}`}
                            />
                        );  
                    })}
            </div>
        </main>
    );
}