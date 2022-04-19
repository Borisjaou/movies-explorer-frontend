import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='project-about'>
      <h2 className='project-about__header project-about__header-text'>О проекте</h2>
      <h3 className='project-about__header-text'>Дипломный проект включал 5 этапов</h3>
      <p className='project-about__text'>Составление плана, работу над бэкендом, вёрстку добавление функциональности и финальные доработки</p>
      <h3 className='project-about__header-text'>На выполнение диплома ушло 5 недель</h3>
      <p className='project-about__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <div className='project-about__container'>
        <div className='first'>
          <div className='project-about__text_black'>1 неделя</div>
          <div className='project-about__underline-text'>Back-end</div>
        </div>
        <div className='second'>
          <div className='project-about__text'>4 недели</div>
          <div className='project-about__underline-text'>Front-end</div>
        </div>
      </div>

    </section>
  );
}
export default AboutProject;
