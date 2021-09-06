import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = ({ moviesFilter, ratingFilter }) => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const url = moviesFilter
    ? `https://${process.env.REACT_APP_API_SEARCH_MOVIE}`
    : `https://${process.env.REACT_APP_API_DISCOVER_MOVIE}`;

  useEffect(() => {
    async function getMovies() {
      setActivePage(1);
      const response = await axios({
        method: "get",
        url: url,
        params: {
          api_key: process.env.REACT_APP_API_KEY_PASS,
          query: moviesFilter,
          page: 1,
        },
      });
      setMovies(response.data.results);
    }
    getMovies();
  }, [moviesFilter]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios({
        method: "get",
        url: url,
        params: {
          api_key: process.env.REACT_APP_API_KEY_PASS,
          query: moviesFilter,
          page: activePage,
        },
      });
      setMovies([...movies, ...response.data.results]);
    }
    getMovies();
  }, [activePage]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        setActivePage((prev) => prev + 1);
      }
    });
  }, []);

  return (
    <div className="container text-center ">
      <div className="row">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(moviesFilter.toLowerCase())
          )
          .filter((movie) => movie.vote_average >= ratingFilter)
          .map((movie) => (
            <div className="col-md-3 my-3">
              <Link to={`/pelicula/${movie.id}`}>
                <img
                  className="img-fluid imgHover rounded-3 imageMovie"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        {movies === null && (
          <p>
            Lo sentimos! Esa pelicula no se encuentra disponible. Intente buscar
            otra!
          </p>
        )}
      </div>
    </div>
  );
};

export default Movies;
