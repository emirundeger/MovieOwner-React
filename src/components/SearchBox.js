import React from "react";
import "./SearchBox.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "@reach/router";
import { Consumer } from "../Context";

class SearchBox extends React.Component {
  state = {
    searchInput: ""
  };
  handleInputChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };
  render() {
    return (
      <Consumer>
        {context => (
          <form className="search-input">
            <FaSearch />
            <input
              type="text"
              placeholder="Search for movie"
              value={this.state.searchInput}
              onChange={this.handleInputChange}
            />
            {this.state.searchInput ? (
              <div className="search-filter">
                {this.props.movies
                  .filter(movie =>
                    movie.title
                      .toLowerCase()
                      .includes(this.state.searchInput.toLowerCase())
                  )
                  .map(movie => (
                    <Link
                      key={movie.title}
                      to={`/details/${movie.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => {
                        context.handleSelectedMovie(movie.id);
                        this.setState({ searchInput: "" });
                      }}
                    >
                      <p className="movie-selection">{movie.title}</p>
                    </Link>
                  ))}
              </div>
            ) : null}
          </form>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
