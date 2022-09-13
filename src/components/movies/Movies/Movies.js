import React from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Navigation from '../../common/Navigation/Navigation';
import More from '../More/More';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import moviesApi from '../../../utils/MoviesApi';

function Movies() {
  const SHORTIES_MAX_DURATION = 40;

  const [movies, setMovies] = React.useState([]);

  const [searchText, setSearchText] = React.useState('');
  const [areShortiesSeleted, setAreShortiesSeleted] = React.useState(true);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSearchFormSubmit({ searchText, areShortiesSeleted }) {
    if (!movies.length) {
      setIsLoading(true);
      await getMovies();
      setIsLoading(false);
    }
    setAreShortiesSeleted(areShortiesSeleted);
    setSearchText(searchText);
  }

  function handleCheckboxChange(value) {
    setAreShortiesSeleted(value);
  }

  async function getMovies() {
    const movies = await moviesApi.getMovies();
    setMovies(movies);
  }

  React.useEffect(() => {
    if (movies.length) {
      let filtered = movies;

      if (!areShortiesSeleted) {
        filtered = movies.filter(
          (movie) => movie.duration > SHORTIES_MAX_DURATION,
        );
      }

      const regexp = new RegExp(searchText, 'i');
      filtered = filtered.filter((movie) => regexp.test(movie.nameRU));

      setFilteredMovies(filtered);
    }
  }, [searchText, areShortiesSeleted, movies]);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm
          onSubmit={handleSearchFormSubmit}
          onCheckboxChange={handleCheckboxChange}
          isBlocked={isLoading}
          defaultSearchText={searchText}
          defaultAreShortiesSeleted={areShortiesSeleted}
        />
        <MoviesCardList type="all" movies={filteredMovies} />
        <More />
        {/* <Preloader /> will ve set later */}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
