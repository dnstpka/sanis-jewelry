'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Image01 from '@/images/hero/01.png';
import Image02 from '@/images/hero/02.png';
import ArrowIcon from '@/images/icons/carousel-arrow.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './styles.module.scss';
import { Partners } from '@/components';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: `.${styles.heroPrev}`,
            nextEl: `.${styles.heroNext}`,
          }}
          pagination={{
            el: `.${styles.heroPagination}`,
            type: 'bullets',
            bulletClass: `${styles.heroBullet}`,
            bulletActiveClass: `${styles.heroActiveBullet}`,
          }}>
          <SwiperSlide className={styles.heroSlide}>
            <Image className={styles.heroImage} src={Image01} alt="изображение" />
            <div className={styles.heroInfo}>
              <p> Скидки до 20% на украшения из красного золота</p>
              <button className={styles.heroBtn}>Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroSlide}>
            <Image className={styles.heroImage} src={Image02} alt="изображение" />
            <div className={styles.heroInfo}>
              <p> Скидки до 20% на украшения из красного золота</p>
              <button className={styles.heroBtn}>Подробнее</button>
            </div>
          </SwiperSlide>

          <div className={styles.heroNav}>
            <button className={styles.heroPrev}>
              <Image className={styles.heroPrevImg} src={ArrowIcon} alt="назад" />
            </button>
            <button className={styles.heroNext}>
              <Image className={styles.heroNextImg} src={ArrowIcon} alt="вперед" />
            </button>
          </div>

          <div className={styles.heroPagination}></div>
        </Swiper>
      </section>
      <Partners />
    </>
  );
}
