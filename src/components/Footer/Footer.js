import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
      <p className="footer__copyright">&copy;2022</p>
      <nav className="footer__links">
        <a href="https://practicum.yandex.ru/"
          className="footer__link" rel="noreferrer noopener"
          aria-label="Яндекс.Практикум" target="_blank">Яндекс.Практикум
        </a>
        <a href="https://github.com/ilyapopko?tab=repositories"
          className="footer__link" rel="noreferrer noopener"
          aria-label="Github" target="_blank">Github
        </a>
        <a href="https://vk.com/id111993792"
          className="footer__link" rel="noreferrer noopener"
          aria-label="VK" target="_blank">ВКонтакте
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
