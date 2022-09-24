import { useEffect, useState } from 'react';
import { omit } from 'lodash';
import emailValidator from 'email-validator';

function useForm(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [isEditValid, setIsEditValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const validate = (e, name, value) => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    const nameRegExp = /^(([а-яА-ЯёЁa-zA-Z' \- \s]{2,30}))$/u;

    switch (name) {
      case 'userName':
        if (!new RegExp(nameRegExp).test(value)) {
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
          !new RegExp(passwordRegExp).test(value)
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
    e.persist();

    const { name } = e.target;
    const { value } = e.target;

    validate(e, name, value);

    setValues({
      ...values, [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    props.onRegister({
      name: values.userName,
      email: values.email,
      password: values.password,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.onRegister({
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

  useEffect(() => {
    if (nameError || emailError) {
      setIsEditValid(true);
    } else {
      setIsEditValid(false);
    }
  });

  useEffect(() => {
    if (submit) {
      setIsEditValid(false);
    }
  });

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleLoginSubmit,
    isEditValid,
    isValid,
    isLoginValid,
  };
}
export default useForm;
