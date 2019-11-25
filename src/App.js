import React from "react";
import { Router, Link, navigate } from "@reach/router";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import Details from "./components/Details";
import { Provider } from "./Context";
import axios from "./utilities/axios-instance";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      selectedMovie: null,
      handleSelectedMovie: this.handleSelectedMovie
    };
  }
  handleSelectedMovie = id => {
    let movie = this.state.movies.find(m => m.id === id);
    this.setState({ selectedMovie: movie });
  };
  componentDidMount() {
    if (!this.state.movies) {
      axios
        .get()
        .then(res => {
          this.setState({
            movies: res.data.movies
          });
        })
        .catch(() => {
          navigate("/");
        });
    }
  }
  render() {
    return (
      <div>
        <Provider value={this.state}>
          <div className="app-header">
            <div className="logo">
              <Link to="/">
                Wookie <br /> Movies
              </Link>
            </div>
            <SearchBox movies={this.state.movies} />
          </div>
          <Router>
            <Results path="/" movies={this.state.movies} />
            <Details path="/details/:id" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
