//ComponentBranch
export default function SearchResult({ movies, setSearch, getMovies }) {
    return (
        <>
            <Search setSearch={setSearch} getMovies={getMovies} />
            <section className='movie-view'>
                <h2>Filmer</h2>
                {movies.map((movie, index) => (
                    // <MovieCard key={index} title={movie?.movie?.Title} img={movie?.movie?.Poster} slug={movie?.movie?.Title.replace(/\s/g, "-").toLowerCase()} />
                    <MovieCard key={index} title={movie.Title} img={movie.Poster} slug={movie.Title.replace(/\s/g, "-").toLowerCase()} />
                ))}
            </section>
        </>

    );
}
