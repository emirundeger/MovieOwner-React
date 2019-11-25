import React from "react";
import Genre from "./Genre";

const Results = props => {
  const genres = [];

  if (props.movies) {
    props.movies.forEach(movie => {
      if (movie.genres) {
        movie.genres.forEach(genre => {
          if (!genres.includes(genre)) {
            genres.push(genre);
          }
        });
      }
    });
  }

  return (
    <div>
      {genres.map(genre => (
        <Genre key={genre} genre={genre} movies={props.movies} />
      ))}
    </div>
  );
};

export default Results;
