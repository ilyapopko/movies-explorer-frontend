import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import '../Movies/Movies.css';

const SavedMovies = ({ isSearching, movies, savedMovies, onFindMovie, onDeleteMovie, onBurgerClick }) => {

  return (
    <>
      <Header type="default">
        <Navigation type="authorized" onBurgerClick={onBurgerClick} />
      </Header>
      <SearchForm
        onSubmit={onFindMovie} />
      {isSearching & !!movies & movies.length === 0 ? <p className="movies__error">Ничего не найдено</p> : ''}
      <section className="movies">
        {!!movies & movies.length !== 0 ?
          <>
            <MoviesCardList
              movies={movies}
              isSavedMovies={true}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie} />
            <button className="movies__show-more">Ещё</button>
          </>
          : ''}
      </section>
      <Footer />
    </>
  )
};

export default SavedMovies;
