import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import '../Movies/Movies.css';

const SavedMovies = () => (
  <>
    <Header />
    <SearchForm />
    <section className="movies">
      <MoviesCardList />
    </section>
    <Footer />
  </>
);

export default SavedMovies;
