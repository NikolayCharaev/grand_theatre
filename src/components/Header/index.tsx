import React from 'react';
import Aside from '../Aside';

import { motion } from 'framer-motion';
import './style.scss';

import { useResize } from '../../hooks/UseResize';

const Header = () => {
  const {isScreenMd} = useResize()
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">

          {isScreenMd && (
  <motion.ul
  className="menu__list"
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
  <li className="menu__item">
    <a className="menu__link" href="##">
      Главная
    </a>
  </li>

  <li className="menu__item">
    <a className="menu__link" href="##">
      о театре
    </a>
  </li>

  <li className="menu__item">
    <a className="menu__link" href="##">
      Наши постановки
    </a>
  </li>

  <li className="menu__item">
    <a className="menu__link" href="##">
      партнеры театра
    </a>
  </li>

  <li className="menu__item">
    <a className="menu__link" href="##">
      контакты
    </a>
  </li>
</motion.ul>
          )}
        

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
