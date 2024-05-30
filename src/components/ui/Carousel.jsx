import React from "react";
import ImageComponent from "../../components/ui/ImageComponent";
import Slider from "react-slick";

import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//React slick for carousel
const Carousel = ({ arrayData }) => {
  //slide to show according to window width
  const slideAmount = () => {
    if (window.innerWidth > 700) return 3;
    else if (window.innerWidth > 400) return 2;
    else return 1;
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideAmount(),
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {arrayData.map((data, index) => (
          <div className="carousel-img-card" key={index}>
            <ImageComponent
              src={data.img}
              desc={data.name}
              hash={"LILzjM58Xoa$#ix^o#M|*0?bx[t7"}
            />
            <p>{data.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
