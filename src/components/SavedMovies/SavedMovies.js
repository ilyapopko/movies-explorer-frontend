import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import '../Movies/Movies.css';

const SavedMovies = () => (
  <>
    <Header type="default">
      <Navigation type="authorized"/>
    </Header>
    <SearchForm />
    <section className="movies">
      <MoviesCardList />
    </section>
    <Footer />
  </>
);

export default SavedMovies;
