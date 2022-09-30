import React from 'react';
import './PageNotFound.css';

function PageNotFound(props) {
  return (
    <section className='page404'>
      <div className='page404__message'>
        <p className='page404__number'>404</p>
        <p className='page404__text'>страница не найдена</p>
      </div>
      <button className='page404__button' onClick={props.onBack}>
        Назад
      </button>
    </section>
  );
}
export default PageNotFound;
