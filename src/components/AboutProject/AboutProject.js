import React from 'react';
import './AboutProject.css';

const AboutProject = () => (
  <section className="about-project" id="about_project">
    <h2 className="about-project__title">О проекте</h2>
    <div className="about-project__description">
      <article className="about-project__column">
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности
          и финальные доработки.
        </p>
      </article>
      <article className="about-project__column">
        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
          чтобы успешно защититься.
        </p>
      </article>
    </div>
    <div className="about-project__chart">
      <div className="about-project__chart-backend">
        <div className="about-project__chart-subtitle about-project__chart-subtitle_backend">1 неделя</div>
        <p className="about-project__chart-text">Back-end</p>
      </div>
      <div className="about-project__chart-frontend">
        <div className="about-project__chart-subtitle about-project__chart-subtitle_frontend">4 недели</div>
        <p className="about-project__chart-text">Front-end</p>
      </div>
    </div>
  </section>
);

export default AboutProject;
