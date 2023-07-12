import Button from '../custom/Button';

import poster from '../../assets/poster.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import './style.scss';

const Poster = () => {



  return (
    <div className="poster">
      <div className="container">
        <div className="poster__inner">
          <div className="poster__content">
            <h1 className="poster__title">Большой театр</h1>
            <p className="poster__description">
              Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года —
              Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России
              и одно из крупнейших театральных зданий в Европе XVIII.
            </p>
            <Button>афиша</Button>
          </div>
          <Swiper
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
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
