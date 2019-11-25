import React from "react";
import { Link } from "@reach/router";
import "./Details.css";
import { FaRegStar, FaStar, FaStarHalfAlt, FaHome } from "react-icons/fa";
import { Consumer } from "../Context";

class Details extends React.Component {
  getStars(movie) {
    let movieStars = [];
    let imdbScale = 10;

    let movieRating = movie.imdb_rating;
    const stars = movieRating * 5 / imdbScale;

    let roundedStars = Math.floor(stars);
    let isDecimal = stars % 1;

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedStars) {
        movieStars.push(<FaStar key={i} />);
      } else if (
        isDecimal &&
        movieStars[i - 2]["type"]["displayName"] !== FaStarHalfAlt
      ) {
        movieStars.push(<FaStarHalfAlt key={i} />);
      } else {
        movieStars.push(<FaRegStar key={i} />);
      }
    }

    return movieStars;
  }
  render() {
    return (
      <Consumer>
        {context => (
          <div className="movie-page-container">
            <img
              alt={"backdrop"}
              className="movie-backdrop"
              src={context.selectedMovie.backdrop}
            />
            <div className="movie-info">
              <img alt={"poster"} src={context.selectedMovie.poster} />
              <div className="movie-details">
                <div className="title-rating">
                  <h2>
                    {context.selectedMovie.title} ( rating:{" "}
                    {context.selectedMovie.imdb_rating} )
                  </h2>
                  <div className="rating-stars">
                    {this.getStars(context.selectedMovie)}
                  </div>
                </div>
                <div className="movie-data">
                  <div className="movie-specs">
                    {new Date(
                      context.selectedMovie.released_on
                    ).getFullYear()}{" "}
                    | {context.selectedMovie.length} |{" "}
                    {context.selectedMovie.director}
                  </div>
                  <div className="movie-cast">
                    <b>Cast:</b> {context.selectedMovie.cast}
                  </div>
                </div>
                <div className="movie-overview">
                  {context.selectedMovie.overview}
                </div>
                <Link className="backBtn" to="/">
                  <FaHome />
                  <span>Go Home</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Details;
