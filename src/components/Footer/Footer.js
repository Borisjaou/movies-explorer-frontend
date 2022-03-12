import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className=''>
      <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <a href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
      <a href='https://practicum.yandex.ru'>Github</a>
      <a href='https://practicum.yandex.ru'>Facebook</a>
      <p className=''>
        &copy; {new Date().getFullYear()} Movies Explorer
      </p>
    </footer>
  );
}
export default Footer;
