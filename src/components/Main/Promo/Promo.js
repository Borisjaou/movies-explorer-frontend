import React from 'react';
import './Promo.css'
import globeLogo from '../../../images/globeLogo.svg'

function Promo() {
  return (
    <section className='promo'>
      <img src={globeLogo} alt='Логотип' />
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
      <button className='promo__button'>Узнать больше</button>
    </section>
  );
}
export default Promo;
