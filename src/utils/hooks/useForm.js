import React from 'react';
import isEmail from 'validator/lib/isEmail';

function validateEmail(value) {
  const ERROR_MSG = 'Неверный формат электронной почты.';
  return isEmail(value) ? '' : ERROR_MSG;
}

export default function useForm(initialValues = {}) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(event) {
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    switch (input.type) {
      case 'email':
        const errorMessage = validateEmail(value);
        setErrors((errors) => ({ ...errors, [name]: errorMessage }));
        input.setCustomValidity(errorMessage);
        break;
      default:
        setErrors((errors) => ({ ...errors, [name]: input.validationMessage }));
    }
    setValues((values) => ({ ...values, [name]: value }));
    setIsValid(input.closest('form').checkValidity());
  }

  return [values, errors, isValid, handleChange];
}
