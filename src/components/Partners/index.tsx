import React from 'react';
import Title from '../custom/Title';
import partnerOne from '../../assets/partners/partner-1.png';

import './style.scss'

const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__inner">
          <Title>партнеры театра</Title>

          <ul className="partners__list">
            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>

            <li className="partners__item">
                <img className="partners__img" src={partnerOne} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
