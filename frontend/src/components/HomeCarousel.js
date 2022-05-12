import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pngmagic.com/product_images/solid-light-blue-background.jpg"
         />
        <Carousel.Caption>
          <h2>Welcome to Turku Second Hand shop</h2>
          <h5>SALE UPTO 60 % OFF</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
