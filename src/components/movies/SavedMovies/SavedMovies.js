import React from 'react';
import mainApi from '../../../utils/MainApi';
import searchMovies from '../../../utils/searchMovies';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import './SavedMovies.css';

function SavedMovies() {
  // Сохраненные фильмы
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isErrorOnLoading, setIsErrorOnLoading] = React.useState(false);

  const [foundMovies, setFoundMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [areShortiesSeleted, setAreShortiesSeleted] = React.useState(true);

  React.useEffect(() => {
    getSavedMovies();
  }, []);

  async function getSavedMovies() {
    setIsErrorOnLoading(false);
    setIsLoading(true);

    try {
      const movies = await mainApi.getSavedMovies();
      setSavedMovies(movies);
      setFoundMovies(movies);
    } catch (err) {
      console.error(err);
      setIsErrorOnLoading(true);
    }
    setIsLoading(false);
  }

  function handleSearchFormSubmit({ searchText, areShortiesSeleted }) {
    setAreShortiesSeleted(areShortiesSeleted);
    setSearchText(searchText);
  }

  function handleCheckboxChange(value) {
    setAreShortiesSeleted(value);
  }

  React.useEffect(() => {
    if (savedMovies) {
      const foundMovies = searchMovies(
        savedMovies,
        searchText,
        areShortiesSeleted,
      );
      setFoundMovies(foundMovies);
    }
  }, [searchText, areShortiesSeleted, savedMovies]);

  // Сохранение фильмов
  async function handleCardClick(movie) {
    const savedMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.movieId,
    );
    await deleteSavedMovie(savedMovie);
  }

  async function deleteSavedMovie(movie) {
    try {
      await mainApi.deleteMovie(movie._id);

      setSavedMovies((movies) =>
        movies.filter((savedMovie) => savedMovie._id !== movie._id),
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSubmit={handleSearchFormSubmit}
          onCheckboxChange={handleCheckboxChange}
          isBlocked={isLoading}
          defaultSearchText={searchText}
          defaultAreShortiesSeleted={areShortiesSeleted}
        />
        <SearchResults
          isErrorOnLoading={isErrorOnLoading}
          isLoading={isLoading}
          movies={foundMovies}
          savedMovies={savedMovies}
          onCardClick={handleCardClick}
          isSavedMoviesSearchResult
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
