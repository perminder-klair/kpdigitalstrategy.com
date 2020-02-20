import React from 'react';
import Slider from 'react-slick';

import ProductSlider from './ProductSlider';
import PageHero from './PageHero';

const ReactSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="section">
      <div className="container">
        <PageHero
          title=" Products to suit your critical business needs"
          paragraph="
          We reliably deliver the full suite of design and marketing services, on time and at the expected price."
        />
        <Slider {...settings}>
          <div>
            <ProductSlider />
          </div>
          <div>
            <ProductSlider />
          </div>
          <div>
            <ProductSlider />
          </div>
          <div>
            <ProductSlider />
          </div>
          <div>
            <ProductSlider />
          </div>
          <div>
            <ProductSlider />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ReactSlider;
