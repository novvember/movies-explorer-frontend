import React from 'react';
import useForm from './useForm';

export default function useFilledForm(initialValues) {
  const [values, errors, isFormValid, handleChange] = useForm(initialValues);

  const [areSameValues, setAreSameValues] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    if (
      values.name === initialValues.name &&
      values.email === initialValues.email
    ) {
      setAreSameValues(true);
      return;
    }
    setAreSameValues(false);
  }, [values, initialValues]);

  React.useEffect(() => {
    setIsValid(!areSameValues && isFormValid);
  }, [areSameValues, isFormValid]);

  return [values, errors, isValid, handleChange];
}
