// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./HeaderBanner.scss";
import React,{ useEffect } from "react";
import Slider from "react-slick";

import classNames from "classnames";
import {
  HideOn,
} from "react-hide-on-scroll";


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
    
        var settings = {
          useCSS: true,
          dots: false,
          infinite: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: false,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4200,
          swipeToSlide: true,
          swipe: true,
          focusOnSelect: true,
          easing: 'easeOutElastic',
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };
     
    //    useEffect(() => {
    //     $(window).scroll(function() {
    //       if ($(this).scrollTop()>310)
    //        {
    //           $('.header-slider').fadeOut(10);
    //        }
    //       else
    //        {
    //         $('.header-slider').show();
    //        }
    //    });
    // })

        return (
            <>     
            <HideOn height={300}>

             <div id="header-slider" className="header-slider">    

            <Slider {...settings}>
              <img src="https://sun9-76.userapi.com/impg/7C7wgUrK3AGIoi4dJPgbq1Y7FrGXA572hn8-HQ/pIbF_XrVZp4.jpg?size=1280x635&quality=95&sign=3511b54196b2e3d1a5bc978691dbdd60&type=album"/>  
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"/>
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"/>
            </Slider>
         
            </div>
            </HideOn>
              </>
              
);              
}


export const layout = {
    areaId: "body",
    sortOrder: 0,
  };