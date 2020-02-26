import React, { Component } from 'react';
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
export default class Responsive extends Component {
  render() {
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
          <PageHero
            title="Products to suit your critical business needs"
            paragraph="
            We reliably deliver the full suite of design and marketing services, on time and at the expected price."
          />
          <Slider {...settings}>
            <div>
              <ProductSlider />{' '}
            </div>
            <div>
              <ProductSlider />{' '}
            </div>
            <div>
              <ProductSlider />{' '}
            </div>
            <div>
              <ProductSlider />{' '}
            </div>
            <div>
              <ProductSlider />{' '}
            </div>
            <div>
              <ProductSlider />{' '}
            </div>
          </Slider>
        </div>
      </Section>
    );
  }
}
