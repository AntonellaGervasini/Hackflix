import Rating from "react-rating";
import "../App.css";
import Navbar from "../components/Navbar";

const Search = ({
  moviesFilter,
  setMoviesFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  const handleChange = (event) => {
    setMoviesFilter(event.target.value);
    console.log(moviesFilter);
  };

  const changeRating = (value) => {
    setRatingFilter(value);
    console.log(value);
  };


  return (
    <div>
      <Navbar />
      <div className="image">
        <div className="text-center  pt-5">
          <h1 className="animate__animated animate__lightSpeedInRight text-white">
            Tus películas favoritas!
          </h1>
          <h3 className="animate__animated animate__lightSpeedInLeft text-white">
            Vive el entretenimiento al máximo
          </h3>
          <p className="text-white">
            Los estrenos más esperados, increible contenido para la familia y
            mucho más.
          </p>

          <label className="search mt-5 mb-2 text-white" htmlFor="search">
            Buscador
          </label>
          <div className="d-flex justify-content-center">
            <input
              className="form-control inputWidth mb-2"
              id="search"
              type="text"
              placeholder="Buscar..."
              value={moviesFilter}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {moviesFilter === "" && (
        <div className="text-center text-warning fs-3 mt-2 mb-3">
          <Rating
            initialRating={ratingFilter}
            stop={10}
            step={2}
            value={ratingFilter}
            emptySymbol="far fa-star "
            fullSymbol="fas fa-star"
            onChange={changeRating}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
