import React from 'react';
import Button from '../custom/Button';
import Title from '../custom/Title';

import './style.scss';
const Maecenas = () => {
  return (
    <div className="maecenas">
      <div className="container">
        <div className="maecenas__inner">
          <Title>стать меценатом</Title>

          <div className="maecenas__content">
            <div className="maecenas__content-left">
              <div className="maecenas__content-phones">
                <a className="maecenas__phone" href="tel:+78121234555">
                  +7 (812) 123-45-55
                </a>
                <a className="maecenas__phone" href="tel:+78121234566">
                  +7 (812) 123-45-66
                </a>
              </div>

              <div className="maecenas__content-address">
                <a className="maecenas__email" href="mailto:info@theater.ru">
                  info@theater.ru
                </a>
                <p className="maecenas__address">г. санкт-петербург, невский 140</p>
              </div>
            </div>
            <div className="maecenas__content-right">
              <form className="maecenas__form" action="">
                <div className="maecenas__form-top">
                  <input className="maecenas__input input-one" type="text" placeholder="Имя" />
                  <input className="maecenas__input input two" type="text" placeholder="Компания" />
                  <textarea
                    className="maecenas__input input-three"
                    placeholder="Сообщение"></textarea>
                  <input className="maecenas__input input-four" type="text" placeholder="Телефон" />
                  <input className="maecenas__input input-five" type="text" placeholder="Email" />
                </div>

                <div className="maecenas__form-bottom">
                  <p>
                    * Ваши данные не будут переданы третьим лицам, 100% вероятность.
                    Конфиденциальность мы гарантируем, и защищаем персональные данные согласно
                    законку ФЗ-52.
                  </p>
                  <Button>отправить</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="footer">
          <span className="footer__border"></span>
          <div className="footer__content">
            <p className="footer__copyright">(с) Все права защищены. Большой театр. 2020</p>
            <p className="footer__dev">Разработано d-e-n.ru</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Maecenas;
