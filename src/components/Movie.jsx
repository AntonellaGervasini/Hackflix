// import Movies from "./Movies";
import stylesMovie from "../components/Movie.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      // if (response.status === 200) {

      // }
    }
    getMovie();
  }, [id]);

  const stylo = {
    backgroundImage: `radial-gradient(circle, rgba(34,34,34,0.44616967084639503) 0%, rgba(0,0,0,0.885041144200627) 80%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
  };

  return (
    <div style={stylo}>
      <div className={`${stylesMovie.marginDiv} text-white `}>
        <a href="/" class="btn ">
          <i class={`${stylesMovie.arrow} fas fa-arrow-circle-left text-white`}>
            Back
          </i>
        </a>
        <div className="">
          <h5 className={`${stylesMovie.stylesTitle} text-white `}>
            {movie.title}
          </h5>
          {movie.image}
        </div>
        <div className={`${stylesMovie.description} w-50 `}>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;