import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <div className='techs__line'></div>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипомном проекте.</p>
      <div className='techs__container'>
        <div className='techs__cell'>
          <p className='techs__cell-text'>HTML</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>CSS</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>JS</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>React</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>Git</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>Express.js</p>
        </div>
        <div className='techs__cell'>
          <p className='techs__cell-text'>MongoDB</p>
        </div>
      </div>
    </section>
  );
}
export default Techs;
