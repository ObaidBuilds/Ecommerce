import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <Carousel className="slider">
      <div>
        <img
          src="https://img.freepik.com/free-photo/front-view-expensive-perfume-bright-table-fragnance-branch_140725-148383.jpg?t=st=1709870870~exp=1709874470~hmac=85c77a60780e3225dbe34e00aae1d5841729a9a671e1fab15a9d918548cc1a3a&w=740"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/front-view-men-perfume-branch-rotten-wood-dark-blue-background_140725-145473.jpg?t=st=1709870710~exp=1709874310~hmac=a64c5482fe15966461fff78173315799defeda272d447f86a5ada7c960bc9f15&w=740"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/front-view-men-perfume-branch-rotten-wood-blue-background_140725-145470.jpg?t=st=1709870791~exp=1709874391~hmac=9c2a92d654df9d94fe0a8addefce905fee3585c0e4b3cf8a6e5464eb95f53146&w=740"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
