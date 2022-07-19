import { useState } from 'react';
import { omit } from 'lodash';
import emailValidator from 'email-validator';

// https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7

export function useForm(callback) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputValid, setIsInputValid] = useState(false);

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
        break;

      case 'password':
        if (
          // eslint-disable-next-line prefer-regex-literals
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value) && value.length < 8
        ) {
          setErrors({
            ...errors,
            password: 'Пароль должен содержать не менее 8 символов',
          });
        } else {
          const newObj = omit(errors, 'password');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    // to stop default events
    e.persist();

    const { name } = e.target;
    const { value } = e.target;

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
