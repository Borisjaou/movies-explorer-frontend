import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../utils/FormValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile(props) {
  const {
    handleChange,
    errors,
    handleUserEdit,
    isEditValid,
  } = useForm(props);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
    handleChange(e);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    handleChange(e);
  }
  return (

    <section className='profile'>
      <h1 className='profile__header'>Привет, {name}</h1>
      <form onSubmit={handleUserEdit}>
        <div className='profile__form'>
          <div className='profile__form-field '>
            <label htmlFor='name'>Имя</label>
            <input
              value={name}
              onChange={handleChangeName}
              name='userName'
              className='profile__input'
              type='text'
              id='name'
              required
            />
          </div>
          <span className='profile__input-error'>{errors.userName}</span>
          <span className='form-undeline' />
          <div className='profile__form-field'>
            <label htmlFor='email'>E-mail</label>
            <input
              value={email}
              onChange={handleChangeEmail}
              name='email'
              className='profile__input'
              type='email'
              id='email'
              required
            />
          </div>
          <span className='profile__input-error'>{errors.email}</span>
        </div>
        <div className='profile__button-container'>
          <span className='profile__input-error'>{props.errorMessage}</span>
          <button
            className='profile__button profile__edit-button'
            type='submit'
            disabled={!isEditValid}
          >Редактировать</button>
          <button onClick={props.signOut} className='profile__button profile__quit-button' type='button'>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}
export default Profile;
