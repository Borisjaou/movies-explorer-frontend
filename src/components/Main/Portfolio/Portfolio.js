import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/anchor_arrow_large.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__header'>Портфолио</h2>
      <div className='portfolio__container'>
        <div className='portfolio__link-container'>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'>Статичный сайт</a>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'><img className='portfolio__arrow' src={arrow} alt='стрелка' /></a>
        </div>
        <div className='portfolio__link-container portfolio__link-border'>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'><img className='portfolio__arrow' src={arrow} alt='стрелка' /></a>
        </div>
        <div className='portfolio__link-container'>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
          <a className='portfolio__link' href='https://ya.ru' target='_blank' rel='noreferrer'><img className='portfolio__arrow' src={arrow} alt='стрелка' /></a>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
