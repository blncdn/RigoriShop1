import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default function Layout() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

    var settingsInfo = {
      useCSS: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: true,
      speed: 1150,
      autoplaySpeed: 4200,
      swipeToSlide: false,
      swipe: false,
      easing: 'easeOutElastic',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
 
  return (
    <>
    <LoadingBar />
      <div className="header">
        <Slider {...settingsInfo}>
      <div className="header-info-slider text-center"> 
         <a><strong>❤︎ HERZLICH WILLKOMMEN ❤︎</strong></a>
      </div >
      <div className="header-info-slider text-center ">
         <a><strong>BEST-PREIS & QUALITÄT</strong>  ★★★★★</a>
      </div>
      <div className="header-info-slider text-center">
        <a><strong>✈︎ GRATIS-VERSAND ab 40 Euro ✈︎</strong></a>
      </div>
    </Slider>
        <div className="page-width flex justify-between">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },
                props: {
                  id: "icon-wrapper",
                  className: "icon-wrapper flex justify-between space-x-3",
                },
                sortOrder: 20,
              },
            ]}
          />
        </div>
      </div>
      
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <Area id="footer" noOuter coreComponents={[]} />
      </div>
    </>
  );
}

 

export const layout = {
  areaId: "body",
  sortOrder: 1,
};