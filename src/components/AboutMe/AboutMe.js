import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import MyFoto from '../../images/my.jpg';

const AboutMe = () => (
  <section className="about-me" id="about_me">
    <h2 className="about-me__title">Студент</h2>
    <div className="about-me__student">
      <article className="about-me__description">
        <h3 className="about-me__name">Илья</h3>
        <p className="about-me__caption">Фронтенд-разработчик, 40 лет</p>
        <p className="about-me__text">
          Живу в Краснодаре, учился в Тюменском Государственном Нефтегазовом Университете.
          Не женат, детей нет. Люблю фантастическую литературу и увлекаюсь горным туризмом.
          Программирую давно - по первой профессии 1С Программист.
          Пройдя курс по веб-разработке планирую учиться дальше и заниматься фриланс-заказами.
        </p>
        <nav className="about-me__contacts">
          <a href="https://vk.com/id111993792"
            className="about-me__link" rel="noreferrer noopener"
            aria-label="Моя страница ВКонтакте" target="_blank">ВКонтакте
          </a>
          <a href="https://github.com/ilyapopko?tab=repositories"
            className="about-me__link" rel="noreferrer noopener"
            aria-label="Моя страница на GitHub" target="_blank">Github
          </a>
        </nav>
      </article>
      <img className="about-me__foto" src={MyFoto} alt="Моя фотография" />
    </div>
    <Portfolio />
  </section>
);

export default AboutMe;
