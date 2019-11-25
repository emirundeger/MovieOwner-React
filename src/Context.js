import React from "react";

const Context = React.createContext({
  movies: [],
  selectedMovie: "",
  handleSelectedMovie() {}
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
