import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import './Movies.css';

const Movies = ({ onFindMovie, onSaveCard, onDeleteCard, onBurgerClick }) => (
  <>
    <Header type="default">
      <Navigation type="authorized" onBurgerClick={onBurgerClick} />
    </Header>
    <SearchForm
      onSubmit={onFindMovie} />
    <section className="movies">
      <MoviesCardList
        onSaveCard={onSaveCard}
        onDeleteCard={onDeleteCard} />
      <button className="movies__show-more">Ещё</button>
    </section>
    <Footer />
  </>
);

export default Movies;
