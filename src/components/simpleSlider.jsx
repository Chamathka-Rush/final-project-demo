import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



class SimpleSlider extends Component {
    
    render() { 

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return ( 
            <div>
                <Slider {...settings}>
                    <div>
                        <img style={{ width: '1320px', height: '600px'}} src="/images/carousel1.jpeg" />
                    </div>
                    <div>
                        <img style={{ width: '1320px', height: '600px'}} src="/images/carousel9.jpg" />
                    </div>
                    <div>
                        <img style={{ width: '1320px', height: '600px'}} src="/images/carousel3.jpg" />
                    </div>
                    <div>
                        <img style={{ width: '1320px', height: '600px'}} src="/images/carousel8.jpg" />
                    </div>

                </Slider>
            </div>
         );
    }
}
 
export default SimpleSlider;