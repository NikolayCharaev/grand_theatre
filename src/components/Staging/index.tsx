import React from 'react';
import Title from '../custom/Title';

import './style.scss';

import stagingOne from '../../assets/staging/staging-1.jpg';
import stagingTwo from '../../assets/staging/staging-2.jpg';
import stagingThree from '../../assets/staging/staging-3.jpg';
import stagingFour from '../../assets/staging/staging-4.jpg';

import { motion } from 'framer-motion';

const Staging = () => {
  return (
    <div className="staging">
      <div className="staging__inner">
        <Title>наши постановки</Title>
        <motion.ul
          className="staging__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          <motion.li
            className="staging__item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <img className="staging__img" src={stagingOne} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">ОСКАР 2020</h4>
              <p className="staging__item-date">сентябрь 2020</p>
            </div>
            <span className="staging__info"></span>
          </motion.li>

          <motion.li
            className="staging__item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <img className="staging__img" src={stagingTwo} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">ГРЭММИ 2017</h4>
              <p className="staging__item-date">сентябрь 2017</p>
            </div>
            <span className="staging__info"></span>
          </motion.li>

          <motion.li
            className="staging__item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <img className="staging__img" src={stagingThree} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">золотой грамофон</h4>
              <p className="staging__item-date">июль 2020</p>
            </div>
            <span className="staging__info"></span>
          </motion.li>

          <motion.li
            className="staging__item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <img className="staging__img" src={stagingFour} alt="" />
            <div className="staging__content">
              <h4 className="staging__item-title">щелкунчик</h4>
              <p className="staging__item-date">май 2020</p>
            </div>
            <span className="staging__info"></span>
          </motion.li>
        </motion.ul>



        {/* <div className="container"> */}



          <div className="staging__stars">
            <div className="staging__stars-inner">
              <div className="staging__stars-left">
                <h1 className="staging__stars-title">2018</h1>
                <h1 className="staging__stars-title">2019</h1>
                <h1 className="staging__stars-title">2020</h1>
              </div>
              <div className="staging__start-right">
                <motion.ul
                  className="staging__stars-list"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 1 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}>
                  <motion.li
                    className="staging__stars-item"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 47.94 47.94"
                      fill="var(--gold)">
                      <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                    </svg>
                  </motion.li>
                  <motion.li
                    className="staging__stars-item"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 47.94 47.94"
                      fill="var(--gold)">
                      <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                    </svg>
                  </motion.li>

                  <motion.li
                    className="staging__stars-item"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 47.94 47.94"
                      fill="var(--gold)">
                      <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                    </svg>
                  </motion.li>

                  <motion.li
                    className="staging__stars-item"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 47.94 47.94"
                      fill="var(--gold)">
                      <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                    </svg>
                  </motion.li>

                  <motion.li
                    className="staging__stars-item"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 47.94 47.94"
                      fill="var(--gold)">
                      <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z" />
                    </svg>
                  </motion.li>
                </motion.ul>
                <h3 className="staging__stars-text">
                  Лучший театр <br /> по мнению театральных критиков Парижа
                </h3>
              </div>
            </div>
          </div>
        {/* </div>  */}
      </div>
    </div>
  );
};

export default Staging;
