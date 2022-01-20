import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import '../Movies/Movies.css';

const SavedMovies = ({onFindMovie, onBurgerClick}) => (
  <>
    <Header type="default">
      <Navigation type="authorized" onBurgerClick={onBurgerClick}/>
    </Header>
    <SearchForm
      onSubmit={onFindMovie} />
    <section className="movies">
      <MoviesCardList isSavedMovies={true}/>
    </section>
    <Footer />
  </>
);

export default SavedMovies;
