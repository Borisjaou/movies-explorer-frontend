import React, { useCallback, useState } from 'react';
import { omit } from 'lodash';
import emailValidator from 'email-validator';

// https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7

export function useForm(callback) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (e, name, value) => {
    switch (name) {
      case 'userName':
        if (value.length < 2 || value.length > 30) {
          setErrors({
            ...errors,
            userName: 'Имя должно содержать не менее 2 букв, но не более 30',
          });
        } else {
          const newObj = omit(errors, 'userName');
          setErrors(newObj);
        }
        break;

      case 'email':
        if (emailValidator.validate(value) === false) {
          setErrors({
            ...errors,
            email: 'Некорректный email',
          });
        } else {
          const newObj = omit(errors, 'email');
          setErrors(newObj);
        }

      // дописать кейс для пароля

      default:
        break;
    }
  };

  const handleChange = (e) => {
    // to stop default events
    e.persist();

    const name = e.target.name;
    const value = e.target.value;

    validate(e, name, value);

    setValues({
      ...values, [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      console.log('There is an Error');
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
export default useForm;
