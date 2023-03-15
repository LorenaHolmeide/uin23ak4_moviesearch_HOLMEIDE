
//ComponentBranch
import MovieCard from './MovieCard';
import Search from './Search';

export default function SearchResult({ error, search, movies, setSearch, getMovies }) {
    console.log(error)

    return (
        <>
            <Search search={search} setSearch={setSearch} getMovies={getMovies} />

            <section className='movie-view'>
                <h2>Filmer</h2>

                {!error ? movies?.map((movie, index) => (
                    <MovieCard key={index} title={movie.Title} img={movie.Poster} slug={movie.Title.replace(/\s/g, "-").toLowerCase()} />

                )) : <p>Finner ikke film</p>}


            </section>
        </>

    );
}
