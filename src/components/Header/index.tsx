import React from 'react';
import Aside from '../Aside';

import { motion } from 'framer-motion';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <motion.ul
            className="header__list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: .2}}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
               
              },
            }}>
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
          </motion.ul>

          <a className="phone" href="tel:+74951234567">
            +7 495 123-45-67
          </a>
        </div>
      </div>

      <Aside />
    </header>
  );
};

export default Header;
