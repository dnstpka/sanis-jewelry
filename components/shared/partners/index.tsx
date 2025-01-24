'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../container';
import { Title } from '@/components/ui';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PARTNERS_LIST } from '@/constants/partners';

import ArrowIcon from '@/public/images/icons/arrow.svg';

import styles from './styles.module.scss';

export const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <Title text="С нами сотрудничают" />

      <Container>
        <Swiper
          className={styles.slider}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          centeredSlides
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            475: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1240: {
              slidesPerView: 5,
            },
          }}>
          {PARTNERS_LIST?.map((item) => (
            <SwiperSlide className={styles.slide} key={item.id}>
              <img src={item.imgUrl} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <div className={styles.navigation}>
        <button className={styles.prev}>
          <Image className={styles.prevImg} src={ArrowIcon} alt={'назад'} width={17} height={16} />
        </button>
        <button className={styles.next}>
          <Image className={styles.nextImg} src={ArrowIcon} alt={'вперед'} width={17} height={16} />
        </button>
      </div>
    </section>
  );
};
