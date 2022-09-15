import React from 'react';

export default function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(event) {
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: input.validationMessage }));
    setIsValid(input.closest('form').checkValidity());
  }

  return [values, errors, isValid, handleChange];
}
