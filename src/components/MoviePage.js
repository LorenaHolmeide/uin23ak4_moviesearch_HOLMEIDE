//ComponentBranch
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
//export default function MoviePage({ movies })
export default function MoviePage() {
    const { slug } = useParams()
    //const movie = movies.find((m) => m.Title.replace(/\s/g, "-").toLowerCase() === slug)

    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=2b4982d&t=${slug}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error));
    }, [slug]);

    return (
        <section>
            <img src={movie.Poster} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <p>Year released: {movie.Released}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Awards: {movie.Awards}</p>
        </section>
    )
}