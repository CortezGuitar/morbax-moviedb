import React, { Component } from 'react';

import './App.css';

import Header from '../Header';
import MovieList from '../MovieList';
import Footer from '../Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App container border">
        <Header />
        <MovieList />
        <Footer />
      </div>
    );
  }
}
