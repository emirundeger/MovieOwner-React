import React from "react";
import "./Genre.css";
import Movie from "./Movie";

const Genre = props => {
  return (
    <div className="app-container">
      <div className="genre-container">
        <h2 className="genre-type">{props.genre}</h2>
        <div className="movies-container">
          {props.movies.map(movie => {
            return movie.genres.includes(props.genre) ? (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster}
                title={movie.title}
                rating={movie.imdb_rating}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Genre;
