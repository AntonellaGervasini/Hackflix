import stylesMovie from "../components/Movie.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getMovie() {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY_PASS,
        },
      });
      console.log(response);
      setMovie(response.data);
    }
    getMovie();
  }, [id]);

  const stylo = {
    backgroundImage: `radial-gradient(circle, rgba(34,34,34,0.44616967084639503) 0%, rgba(0,0,0,0.885041144200627) 80%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "auto",
    top: "0",
  };

  return (
    <div style={stylo}>
      <div className=" text-white">
        <Link to="/">
          <i
            className={`${stylesMovie.arrow} fas fa-arrow-circle-left text-white`}
          >
            {" "}
            Back
          </i>
        </Link>
        <div>
          <h5 className={`${stylesMovie.stylesTitle} text-white `}>
            {movie.title}
          </h5>
          {movie.image}
        </div>
        <div className={`${stylesMovie.description} w-50  pb-5`}>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
