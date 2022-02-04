import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = ({ isLoading, isSearching, movies, savedMovies, onFindMovie, onSaveMovie, onDeleteMovie, onBurgerClick }) => {

  return (
    <>
      <Header type="default">
        <Navigation type="authorized" onBurgerClick={onBurgerClick} />
      </Header>
      <SearchForm
        onSubmit={onFindMovie} />
      {isLoading && <Preloader />}
      {isSearching & !!movies & movies.length === 0 ? <p className="movies__error">Ничего не найдено</p> : ''}
      <section className="movies">
        {!!movies & movies.length !== 0 ?
          <>
            <MoviesCardList
              movies={movies}
              isSavedMovies={false}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie} />
            <button className="movies__show-more">Ещё</button>
          </>
          : ''}
      </section>
      <Footer />
    </>
  );
};

export default Movies;
