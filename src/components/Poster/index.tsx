import Button from '../custom/Button';

import poster from '../../assets/poster.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import { motion } from 'framer-motion';

import './style.scss';

const Poster = () => {
  return (
    <div className="poster">
      <div className="container">
        <div className="poster__inner">
          <motion.div
            className="poster__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h1 className="poster__title">Большой театр</h1>
            <p className="poster__description">
              Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года —
              Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России
              и одно из крупнейших театральных зданий в Европе XVIII.
            </p>
            <Button>афиша</Button>
          </motion.div>
          <Swiper slidesPerView={1} navigation modules={[Navigation]}>
            <ul className="slider">
              <SwiperSlide>
                <li className="slider__item">
                  <img className="poster__image" src={poster} alt="poster" />

                  <div className="poster__image-mask">
                    <img className="" src={poster} alt="mask" />
                    <div className="mask"></div>
                  </div>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li className="slider__item">
                  <img className="poster__image" src={poster} alt="poster" />
                  <div className="poster__image-mask">
                    <img className="" src={poster} alt="mask" />
                    <div className="mask"></div>
                  </div>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li className="slider__item">
                  <img className="poster__image" src={poster} alt="poster" />
                  <div className="poster__image-mask">
                    <img className="" src={poster} alt="mask" />
                    <div className="mask"></div>
                  </div>
                </li>
              </SwiperSlide>
            </ul>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Poster;
