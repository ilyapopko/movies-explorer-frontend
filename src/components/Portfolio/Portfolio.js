import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <article className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
    <ul className="portfolio__links">
      <li className="portfolio__links-item">
        <a href="https://github.com/ilyapopko/how-to-learn"
          className="portfolio__link" rel="noreferrer noopener"
          aria-label="Статичный сайт" target="_blank">Статичный сайт
        </a>
      </li>
      <li className="portfolio__links-item">
        <a href="https://github.com/ilyapopko/russian-travel"
          className="portfolio__link" rel="noreferrer noopener"
          aria-label="Адаптивный сайт" target="_blank">Адаптивный сайт
        </a>
      </li>
      <li className="portfolio__links-item">
        <a href="https://github.com/ilyapopko/react-mesto-api-full"
          className="portfolio__link" rel="noreferrer noopener"
          aria-label="Одностраничное приложение" target="_blank">Одностраничное приложение
        </a>
      </li>
    </ul>
  </article>
);

export default Portfolio;
