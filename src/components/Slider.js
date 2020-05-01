import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ProductSlider from './ProductSlider';
import PageHero from './PageHero';

const Section = styled.div`
.slick-prev:before {
  width: 70px;
    height: 70px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    top: -11px;
    left: -31px;
    background-image: url('./images/team/Left Scroll.png');
  }
    opacity: 1 !important;
  }
  .slick-next:before {
    width: 75px;
    height: 75px;
    background-size: cover;
    content: '' !important;
    position: absolute;
    top: -11px;
    left: -58px;
    background-image: url('./images/team/Right scroll.png');
  }`;
const Responsive = ({ data, sliderHeading, sliderTitle }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section className="section">
      <div className="container">
        <PageHero title={sliderHeading} paragraph={sliderTitle} />
        <Slider {...settings}>
          {data.map(item => (
            <div>
              <ProductSlider data={item} />{' '}
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};
export default Responsive;
