import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm({ onSubmit }) {
  const DEFAULT_VALUES = { searchText: '', showShorties: true };
  const [inputValues, setInputValues] = React.useState(DEFAULT_VALUES);
  const [errorText, setErrorText] = React.useState('');

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setInputValues((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm(event.target)) return;
    onSubmit();
  }

  function validateForm(form) {
    const isValid = form.checkValidity();

    if (!isValid) {
      setError('Нужно ввести ключевое слово');
      return false;
    }

    setError('');
    return true;
  }

  function setError(text) {
    setErrorText(text);
  }

  return (
    <form className="search-form section" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        className="search-form__input"
        placeholder="Фильм"
        name="searchText"
        required
        value={inputValues.search}
        onChange={handleChange}
      />
      <Checkbox
        title="Короткометражки"
        className="search-form__checkbox"
        name="showShorties"
        value={inputValues.shorties}
        onChange={handleChange}
      />
      <span className="search__error">{errorText}</span>
      <button type="submit" className="search-form__button">
        Найти
      </button>
    </form>
  );
}

export default SearchForm;
