import "./style.css";
import { useState } from "react";
import Header from "../../components/Header";
import Filme from "../../components/Filme";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    async function addMovie() {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmMzYThkNTMwZjE5ODZhNjViZjRkMjVmY2IzMTYwYSIsInN1YiI6IjYxYTAyYmE0M2Q0ZDk2MDA2NDA1Yzc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mXPl6EIQHahdcnQYnj44VtTufrND-B11fMBENArvKvA"
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
                                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        );  
                    })}
            </div>
        </main>
    );
}