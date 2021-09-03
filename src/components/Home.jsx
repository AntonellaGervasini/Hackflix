import "../App.css";
import Search from "./Search";
import Movies from "./Movies";
import { useState } from "react";

function Home() {
  const [moviesFilter, setMoviesFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  return (
    <div className="bgHome">
      <Search
        moviesFilter={moviesFilter}
        setMoviesFilter={setMoviesFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <Movies moviesFilter={moviesFilter} ratingFilter={ratingFilter} />
    </div>
  );
}

export default Home;
