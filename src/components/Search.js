//ComponentBranch
export default function Search({ search, setSearch, getMovies }) {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="SearchField.." onChange={handleSearch} onKeyUp={() => {
                if (search.length >= 3) {
                    getMovies();
                }
            }} />

        </form>
    )

}