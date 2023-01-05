import React, { useState } from 'react';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import classes from './Carousel.module.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <IoChevronBack className={classes.left_arrow} onClick={prevSlide} />
      <IoChevronForward className={classes.right_arrow} onClick={nextSlide} />

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="tour scenes" className={classes.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
