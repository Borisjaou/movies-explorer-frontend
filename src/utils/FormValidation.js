import { useEffect, useState } from 'react';
import { omit } from 'lodash';
import emailValidator from 'email-validator';

// https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7

export function useForm(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);

  const validate = (e, name, value) => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    const nameRegExp = /^(([a-zA-Z' \- \s]{2,30}))$/u;

    switch (name) {
      case 'userName':
        if (!new RegExp(nameRegExp).test(value) /* value.length < 2 || value.length > 30 */) {
          setNameError(false);
          setErrors({
            ...errors,
            userName: 'Имя должно содержать не менее 2 букв, но не более 30',
          });
        } else {
          const newObj = omit(errors, 'userName');
          setErrors(newObj);
          setNameError(true);
        }
        break;

      case 'email':
        if (emailValidator.validate(value) === false) {
          setEmailError(false);
          setErrors({
            ...errors,
            email: 'Некорректный email',
          });
        } else {
          const newObj = omit(errors, 'email');
          setErrors(newObj);
          setEmailError(true);
        }
        break;

      case 'password':
        if (
          !new RegExp(passwordRegExp).test(value) /* && value.length < 8 */
        ) {
          setPasswordError(false);
          setErrors({
            ...errors,
            password: 'Пароль должен содержать: не менее 8 символов, минимум один спецсимвол, заглавную букву и цифру',
          });
        } else {
          const newObj = omit(errors, 'password');
          setErrors(newObj);
          setPasswordError(true);
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
  /*   const handleSubmit = (e) => {
      if (e) e.preventDefault();

      if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
        callback(); // тут переключение на главную?
      } else {
        console.log('There is an Error');
      }
    }; */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister({
      name: values.userName,
      email: values.email,
      password: values.password,
    });
  };
  useEffect(() => {
    if (nameError && emailError && passwordError) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  });

  useEffect(() => {
    if (emailError && passwordError) {
      setIsLoginValid(true);
    } else {
      setIsLoginValid(false);
    }
  });

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
    isLoginValid,
  };
}
export default useForm;
