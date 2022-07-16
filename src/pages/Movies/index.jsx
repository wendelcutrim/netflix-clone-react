import "./style.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Movie from "../../components/Movie";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_BASE_TMDB_URL}/movie/popular`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_TMDB_KEY}`,
                }
            });
            
            const data = await response.json();
    
            setMovies([...data.results])
        }

        fetchData()
    
    }, [])
   /*  async function addMovie() {
        const response = await fetch(`${process.env.REACT_APP_BASE_TMDB_URL}/movie/popular`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_TMDB_KEY}`,
            }
        });
        
        const data = await response.json();

        setMovies([...data.results, ...movies])
    }
 */


    return(
        <main id="movies">
            <Header />
            <div className="movies-list">
           {/*  <button onClick={addMovie}>Listar filmes</button> */}
                {movies.map((movie) => {
                        return(
                            <Movie
                                key={movie.id}
                                title={movie.original_title}
                                votes={movie.vote_average}
                                data={movie.release_date}
                                poster={`${process.env.REACT_APP_API_TMDB_IMG_URL}/${movie.poster_path}`}
                            />
                        );  
                    })}
            </div>
        </main>
    );
}