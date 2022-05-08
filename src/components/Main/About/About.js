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
          <p className='about__text'>Значимость этих проблем настолько очевидна, что постоянное информационно-техническое обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.Дорогие друзья, консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании всесторонне сбалансированных нововведений!
            Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от позиций, занимаемых...</p>
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
