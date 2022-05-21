import React from 'react';
import './About.css'
import myPhoto from '../../../images/myPhoto.jpg'

function About() {
  return (
    <section className='about'>
      <h2 className='about__header'>Студент</h2>
      <div className='about__line'></div>
      <div className='about__container'>
        <div className='about__photo-container'>
          <img className='about__photo' alt='моё фото' src={myPhoto}></img>
        </div>
        <div className='about__description'>
          <h3 className='about__name'>Борис</h3>
          <h3 className='about__text'>Фронтенд-разработчик, 35 лет</h3>
          <p className='about__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className='about__button-container'>
            <a className='about__anchor' href='https://www.facebook.com/BorisKimVLG' target='_blank' rel='noreferrer'>Facebook</a>
            <a className='about__anchor' href='https://github.com/Borisjaou' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default About;
