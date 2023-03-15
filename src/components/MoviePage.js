//ComponentBranch
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function MoviePage() {
    const { slug } = useParams()
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=2b4982d&t=${slug}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error));
    }, [slug]);

    return (
        <section className="movie-page" >
            <div className="movie-info">
                <img src={movie.Poster} alt={movie.Title} />
                <h1>{movie.Title}</h1>
                <em>Plot: {movie.Plot}</em>
                <p>Runtime: {movie.Runtime}</p>
                <p>Language: {movie.Language}</p>
                <p>Type: {movie.Type}</p>
                <p>Production: {movie.Production}</p>
                <p>imdbRating: {movie.imdbRating}</p>
                <p>imdbVotes: {movie.imdbVotes}</p>
                <p>imdbID: {movie.imdbID}</p>
                <ul> <li>Ratings:</li>
                    {movie.Ratings &&
                        movie.Ratings.map((rating) => (
                            <li key={rating.Source}>
                                <span>{rating.Source}: </span>
                                <span>{rating.Value}</span>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="movie-details">
                <p>BoxOffice: {movie.BoxOffice}</p>
                <p>Website: {movie.Website}</p>
                <p>Year released: {movie.Released}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Awards: {movie.Awards}</p>
                <p>Respone:{movie.Response}</p>
            </div>
        </section>
    )
}
