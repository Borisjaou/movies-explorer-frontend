import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text footer__line'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <div className='footer__link-container'>
          <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
          <a className='footer__link' href='https://github.com/Borisjaou' target='_blank' rel='noreferrer'>Github</a>
          <a className='footer__link' href='https://www.facebook.com/BorisKimVLG' target='_blank' rel='noreferrer'>Facebook</a>
        </div>
        <p className='footer__text'>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer >
  );
}
export default Footer;
