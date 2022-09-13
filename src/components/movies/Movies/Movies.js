import React from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Navigation from '../../common/Navigation/Navigation';
import More from '../More/More';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import moviesApi from '../../../utils/MoviesApi';
import searchMovies from '../../../utils/searchMovies';

function Movies() {
  const [allMovies, setAllMovies] = React.useState(null);

  const [searchText, setSearchText] = React.useState('');
  const [areShortiesSeleted, setAreShortiesSeleted] = React.useState(true);
  const [foundMovies, setFoundMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSearchFormSubmit({ searchText, areShortiesSeleted }) {
    if (!allMovies) {
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
    setAllMovies(movies);
  }

  React.useEffect(() => {
    if (allMovies) {
      const foundMovies = searchMovies(
        allMovies,
        searchText,
        areShortiesSeleted,
      );
      setFoundMovies(foundMovies);
    }
  }, [searchText, areShortiesSeleted, allMovies]);

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
        <MoviesCardList type="all" movies={foundMovies} />
        <More />
        {/* <Preloader /> will ve set later */}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
