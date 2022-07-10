import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project-about'>
      <h2 className='project-about__border'>О проекте</h2>
      <div className='project-about__description'>
        <div className='project-about__details'>
          <h3 className='project-about__header'>Дипломный проект включал 5 этапов</h3>
          <p className='project-about__text'>Составление плана, работу над бэкендом, вёрстку добавление функциональности и финальные доработки</p>
        </div>
        <div className='project-about__details'>
          <h3 className='project-about__header'>На выполнение диплома ушло 5 недель</h3>
          <p className='project-about__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project-about__container'>
        <div className='project-about__term'><p className='term__text'>1 неделя</p></div>
        <div className='project-about__date'><p className='term__text'>4 недели</p></div>
        <div className='project-about__skill'>Back-end</div>
        <div className='project-about__skill'><p>Front-end</p></div>
      </div>
    </section>
  );
}
export default AboutProject;
