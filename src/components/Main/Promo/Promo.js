import React from 'react';
import './Promo.css'
import globeLogo from '../../../images/big_logo.svg'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__logo-container'>
          <img className='promo__logo' src={globeLogo} alt='Логотип' />
        </div>
        <div className='promo__description'>
          <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
          <button className='promo__button'>Узнать больше</button>

        </div>

      </div>
    </section >
  );
}
export default Promo;
