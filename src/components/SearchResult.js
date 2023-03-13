//ComponentBranch
import MovieCard from './MovieCard';
import Search from './Search';

export default function SearchResult({ search, movies, setSearch, getMovies }) {
    return (
        <>
            <Search search={search} setSearch={setSearch} getMovies={getMovies} />

            <section className='movie-view'>
                <h2>Filmer</h2>
                {movies.map((movie, index) => (
                    //<MovieCard key={index} title={movie.Title} released={movie.Released} genre={movie.Genre} director={movie.Director} actors={movie.Actors} awards={movie.Awards} img={movie.Poster} slug={movie.Title.replace(/\s/g, "-").toLowerCase()} />
                    <MovieCard key={index} title={movie.Title} img={movie.Poster} slug={movie.Title.replace(/\s/g, "-").toLowerCase()} />

                ))}


            </section>
        </>

    );
}
