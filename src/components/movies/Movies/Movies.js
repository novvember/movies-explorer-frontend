import React from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Navigation from '../../common/Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import moviesApi from '../../../utils/MoviesApi';
import searchMovies from '../../../utils/searchMovies';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';

function Movies() {
  // Значения параметров поиска при загрузке
  const defaultSearchText = localStorage.getItem('searchText') ?? '';
  const defaultAreShortiesSeleted =
    JSON.parse(localStorage.getItem('areShortiesSeleted')) ?? true;
  const defaultFoundMovies =
    JSON.parse(localStorage.getItem('foundMovies')) ?? [];

  // Параметры поиска
  const [searchText, setSearchText] = React.useState(defaultSearchText);
  const [areShortiesSeleted, setAreShortiesSeleted] = React.useState(
    defaultAreShortiesSeleted,
  );
  const [foundMovies, setFoundMovies] = React.useState(defaultFoundMovies);

  // Данные обо всех фильмах из API
  const [allMovies, setAllMovies] = React.useState(null);

  // Служебные сообщения
  const [isLoading, setIsLoading] = React.useState(false);
  const [isErrorOnLoading, setIsErrorOnLoading] = React.useState(false);

  // Поиск фильмов
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

  // Сохранение параметров поиска в localStorage
  React.useEffect(() => {
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('areShortiesSeleted', areShortiesSeleted);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
  }, [searchText, areShortiesSeleted, foundMovies]);

  // Запрос к API
  async function getMovies() {
    setIsErrorOnLoading(false);
    try {
      const movies = await moviesApi.getMovies();
      setAllMovies(movies);
    } catch {
      setIsErrorOnLoading(true);
    }
  }

  // Действия формы
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

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main aria-label="Поиск фильмов">
        <SearchForm
          onSubmit={handleSearchFormSubmit}
          onCheckboxChange={handleCheckboxChange}
          isBlocked={isLoading}
          defaultSearchText={searchText}
          defaultAreShortiesSeleted={areShortiesSeleted}
        />

        {isErrorOnLoading ? (
          <Message
            text="Во&nbsp;время запроса произошла ошибка. Возможно, проблема с&nbsp;соединением или сервер недоступен. Подождите немного и&nbsp;попробуйте ещё раз"
            isError
          />
        ) : isLoading ? (
          <Preloader />
        ) : foundMovies.length ? (
          <MoviesCardList type="all" movies={foundMovies} />
        ) : allMovies ? (
          <Message text="Ничего не&nbsp;найдено" />
        ) : (
          false
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
