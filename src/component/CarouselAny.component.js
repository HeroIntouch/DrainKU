import React, { Component } from "react";
import Slider from "react-slick";
import "../style/CarouselAny.component.css"
import ProblemComponent from "../component/Problem.component"
import GraphVariant from "../component/GraphVariant.component"
import Variant from "../component/Variant.component";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class CarouselAny extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4500,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="CarouselAny">
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
          <div>
            <ProblemComponent/>
          </div>
          <div>
            <GraphVariant/>
          </div>
          <div>
            <Variant/>
          </div>
        </Slider>
      </div>
    );
  }
}