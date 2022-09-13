import React from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Navigation from '../../common/Navigation/Navigation';
import More from '../More/More';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);

  function handleSearchFormSubmit({ searchText, areShortiesSeleted }) {
    console.log(searchText);
    console.log(areShortiesSeleted);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm onSubmit={handleSearchFormSubmit} isBlocked={isLoading} />
        <MoviesCardList type="all" />
        <More />
        {/* <Preloader /> will ve set later */}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
