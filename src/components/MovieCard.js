//ComponentBranch

import { useState, useEffect } from "react";

export default function MovieCard({ title, img, slug }) {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=2b4982d&t=${title}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error));
    }, [title]);

    return (
        <article className="movie-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>Released: {movie.Released}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Director: {movie.Director}</p>
            <p>Awards: {movie.Awards}</p>
            <button onClick={() => { window.location.href = slug }} className="link">Mer info</button>
        </article>
    )
}



