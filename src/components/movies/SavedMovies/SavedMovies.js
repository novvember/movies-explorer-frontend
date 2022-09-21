import React from 'react';
import searchMovies from '../../../utils/searchMovies';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import './SavedMovies.css';

function SavedMovies({ savedMovies, onDeleteSavedMovie }) {
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [areShortiesSeleted, setAreShortiesSeleted] = React.useState(false);

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
    await onDeleteSavedMovie(savedMovie);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSubmit={handleSearchFormSubmit}
          onCheckboxChange={handleCheckboxChange}
          defaultSearchText={searchText}
          defaultAreShortiesSeleted={areShortiesSeleted}
        />
        <SearchResults
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
