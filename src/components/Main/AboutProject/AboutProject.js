import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className=''>
      <h2>О проекте</h2>
      <h3>Дипломный проект включал 5 этапов</h3>
      <p>Составление плана, работу над бэкендом, вёрсткуБ добавление функциональности и финальные доработки</p>
      <h3>На выполнение диплома ушло 5 недель</h3>
      <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      <div>
        <div>
          <p>1 неделя</p>
          <p>Back-end</p>
        </div>
        <div>
          <p>4 недели</p>
          <p>Front-end</p>
        </div>
      </div>

    </section>
  );
}
export default AboutProject;
