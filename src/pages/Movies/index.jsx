import "./style.css";
import { useState } from "react";
import Header from "../../components/Header";
import Filme from "../../components/Filme";

export default function Movies() {
    const [movies, setMovies] = useState([
        {
            title:"Teste",
            length:"1h",
            data:"2022",
            poster:"https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
        },
        {
            title:"Teste",
            length:"1h",
            data:"2022",
            poster:"https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
        },
        {
            title:"Teste",
            length:"1h",
            data:"2022",
            poster:"https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
        }
    ]);

    function addMovie() {
        const newMovie = {
            title:"Teste estado",
            length:"5h",
            data:"2020",
            poster:"https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
        }
        setMovies([newMovie, ...movies])
    }



    return(
        <main id="movies">
            <Header />
            <div className="movies-list">
            <button onClick={addMovie}>Adicionar Filme:</button>
                {movies.map((movie, index) => {
                        return(
                            <Filme
                                key={index}
                                title={movie.title}
                                length={movie.length}
                                data={movie.data}
                                poster={movie.poster}
                            />
                        );  
                    })}
               {/*  <Filme
                    title="Teste"
                    length="1h"
                    data="2022"
                    poster="https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
                /> */}
            </div>
        </main>
    );
}