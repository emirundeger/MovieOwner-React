import React from "react";
import { Link } from "@reach/router";
import { FaStar } from "react-icons/fa";
import { Consumer } from "../Context";

const Movie = props => {
  return (
    <Consumer>
      {context => (
        <Link
          key={props.id}
          to={`/details/${props.id}`}
          className="movie"
          style={{ textDecoration: "none", color: "none" }}
          onClick={() => context.handleSelectedMovie(props.id)}
        >
          <img className="movie-poster" alt="poster" src={props.poster} />
          <p>{props.title}</p>
          <span className="movie-rating">
            <FaStar />
            <span>{props.rating}</span>
          </span>
        </Link>
      )}
    </Consumer>
  );
};

export default Movie;
