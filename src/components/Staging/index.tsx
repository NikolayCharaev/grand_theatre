import React from 'react';
import Title from '../custom/Title';

import './style.scss';

import stagingOne from '../../assets/staging/staging-1.jpg';
import stagingTwo from '../../assets/staging/staging-2.jpg';
import stagingThree from '../../assets/staging/staging-3.jpg';
import stagingFour from '../../assets/staging/staging-4.jpg';

const Staging = () => {
  return (
    <div className="staging">
      {/* <div className="container"> */}
      <div className="staging__inner">
        <Title>наши постановки</Title>
        <ul className="staging__list">
          <li className="staging__item">
            <img className="staging__img" src={stagingOne} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">ОСКАР 2020</h4>
              <p className="staging__item-date">сентябрь 2020</p>
            </div>
            <span className="staging__info">
            </span>
          </li>

          <li className="staging__item">
            <img className="staging__img" src={stagingTwo} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">ГРЭММИ 2017</h4>
              <p className="staging__item-date">сентябрь 2017</p>
            </div>
            <span className="staging__info">
            </span>
          </li>

          <li className="staging__item">
            <img className="staging__img" src={stagingThree} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">золотой грамофон</h4>
              <p className="staging__item-date">июль 2020</p>
            </div>
            <span className="staging__info">
            </span>
          </li>

          <li className="staging__item">
            <img className="staging__img" src={stagingFour} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">щелкунчик</h4>
              <p className="staging__item-date">май 2020</p>
            </div>
            <span className="staging__info">
            </span>
          </li>

        </ul>
      </div>
    </div>

    // </div>
  );
};

export default Staging;
