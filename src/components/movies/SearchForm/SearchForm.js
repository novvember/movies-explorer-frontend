import classNames from 'classnames';
import React from 'react';
import useForm from '../../../utils/hooks/useForm';
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

  // eslint-disable-next-line no-unused-vars
  const [values, errors, isValid, handleChange] = useForm(defaultValues);
  const [errorText, setErrorText] = React.useState('');

  React.useEffect(() => {
    if (values.areShortiesSeleted !== defaultAreShortiesSeleted) {
      onCheckboxChange(values.areShortiesSeleted);
    }
  }, [values.areShortiesSeleted, onCheckboxChange, defaultAreShortiesSeleted]);

  React.useEffect(() => {
    if (isValid) {
      setErrorText('');
    }
  }, [isValid]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      setErrorText('Нужно ввести ключевое слово');
      return;
    }
    onSubmit(values);
  }

  return (
    <form className="search-form section" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        className={classNames('search-form__input', {
          'search-form__input_invalid': errorText,
        })}
        placeholder="Фильм"
        name="searchText"
        required
        value={values.searchText}
        onChange={handleChange}
        disabled={isBlocked}
      />
      <Checkbox
        title="Короткометражки"
        className="search-form__checkbox"
        name="areShortiesSeleted"
        checked={values.areShortiesSeleted}
        onChange={handleChange}
        disabled={isBlocked}
      />
      <span className="search-form__error">{errorText}</span>
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
