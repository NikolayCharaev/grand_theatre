import React from 'react';
import Title from '../custom/Title';
import './style.scss';

import aboutOne from '../../assets/about-1.svg';
import aboutTwo from '../../assets/about-2.svg';
import aboutPost from '../../assets/about-post.jpg';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <Title>о театре</Title>
        </div>

        <div className="about__content">
          <motion.div
            className="about__content-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}>
            <motion.h2
              transition={{ duration: 0.6 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="about__title">
              Самый лучший театр СПБ
            </motion.h2>
            <motion.p
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="about__description">
              Как свидетельствуют архивные документы, первое каменное здание Большого театра начали
              возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как
              Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила
              немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый
              проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А.
              Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других
              свидетельствах, годом открытия можно считать 1784 год.
            </motion.p>
          </motion.div>
          <motion.div
            className="about__content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <h2 className="about__title">немного о цифрах</h2>
            <div className="about__items">
              <div className="about__item">
                <img src={aboutOne} alt="" />
                <h4 className="about__item-title">
                  <span>1600</span> посадочный мест
                </h4>
              </div>

              <div className="about__item">
                <img src={aboutTwo} alt="" />
                <h4 className="about__item-title">
                  <span>350</span> лет истории
                </h4>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about__content-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <img className="about__content-img" src={aboutPost} alt="poster" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
