import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import '../Movies/Movies.css';

const SavedMovies = ({ isSearching, movies, isShortFilms, savedFilter, savedMovies, onFindMovie, onDeleteMovie, onBurgerClick }) => {
  return (
    <>
      <Header type="default">
        <Navigation type="authorized" onBurgerClick={onBurgerClick} />
      </Header>
      <SearchForm onSubmit={onFindMovie} isShortFilms={isShortFilms} savedFilter={savedFilter}/>
      {isSearching & !!movies & movies.length === 0 ? <p className="movies__error">Ничего не найдено</p> : ''}
      <section className="movies">
        {!!movies & movies.length !== 0 ?
          <MoviesCardList
            movies={movies}
            isSavedMovies={true}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie} />
          : ''}
      </section>
      <Footer />
    </>
  )
};

export default SavedMovies;
