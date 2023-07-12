import React from 'react';

import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="##">
                Главная
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="##">
                о театре
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="##">
                Наши постановки
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="##">
                партнеры театра
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="##">
                контакты
              </a>
            </li>
          </ul>

          <a className="phone" href="tel:+74951234567">
            +7 495 123-45-67
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
