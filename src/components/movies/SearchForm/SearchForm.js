import classNames from 'classnames';
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm({
  onSubmit,
  onCheckboxChange,
  isBlocked,
  defaultSearchText,
  defaultAreShortiesSeleted,
}) {
  const defaultValues = {
    searchText: defaultSearchText,
    areShortiesSeleted: defaultAreShortiesSeleted,
  };

  const form = React.useRef();

  const [inputValues, setInputValues] = React.useState(defaultValues);
  const [isValid, setIsValid] = React.useState(false);
  const [isErrorShown, setIsErrorShown] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  function handleChange(event) {
    const input = event.target;
    const name = input.name;
    let value;
    if (input.type === 'checkbox') {
      value = input.checked;
      onCheckboxChange(value);
    } else {
      value = input.value;
    }

    setInputValues((state) => ({ ...state, [name]: value }));
    validateForm();
  }

  function validateForm() {
    setIsValid(form.current.checkValidity());
  }

  React.useEffect(() => {
    if (isValid) {
      setIsErrorShown(false);
    }
  }, [isValid]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      setErrorText('Нужно ввести ключевое слово');
      setIsErrorShown(true);
      return;
    }
    onSubmit(inputValues);
  }

  return (
    <form
      className="search-form section"
      onSubmit={handleSubmit}
      noValidate
      ref={form}
    >
      <input
        type="text"
        className={classNames('search-form__input', {
          'search-form__input_invalid': isErrorShown,
        })}
        placeholder="Фильм"
        name="searchText"
        required
        value={inputValues.searchText}
        onChange={handleChange}
        disabled={isBlocked}
      />
      <Checkbox
        title="Короткометражки"
        className="search-form__checkbox"
        name="areShortiesSeleted"
        checked={inputValues.areShortiesSeleted}
        onChange={handleChange}
        disabled={isBlocked}
      />
      <span className="search-form__error">{isErrorShown && errorText}</span>
      <button
        type="submit"
        className="search-form__button"
        disabled={isBlocked}
      >
        Найти
      </button>
    </form>
  );
}

export default SearchForm;
