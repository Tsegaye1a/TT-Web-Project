import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarouselb() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "alt="First slide"
          src="https://www.pngmagic.com/product_images/solid-light-blue-background.jpg"
         />
        <Carousel.Caption>
          <h2>My Account</h2>
          <h5></h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarouselb;
