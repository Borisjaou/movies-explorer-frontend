import React from 'react';
import './Promo.css'
import globeLogo from '../../../images/globeLogo.svg'

function Promo() {
  return (
    <section className='promo'>
      <img src={globeLogo} alt='Логотип' />
      <h1 className=''>Учебный проект студента факультета Веб-разработки.</h1>
      <p>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
      <button>Узнать больше</button>
    </section>
  );
}
export default Promo;
