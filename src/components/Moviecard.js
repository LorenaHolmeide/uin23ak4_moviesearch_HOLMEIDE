import { Link } from "react-router-dom";
export default function MovieCard({ title, img, slug }) {
    return (
        <article className="movie-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <Link to={slug} className="link"></Link>
        </article>
    )
}