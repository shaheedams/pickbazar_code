import React, { Component } from "react";
import style from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import left from '../SRC/previous.png'
import right from '../SRC/next.png'
import offer1 from '../SRC/promotion/offer-1.png'
import offer2 from '../SRC/promotion/offer-2.png'
import offer3 from '../SRC/promotion/offer-3.png'
import offer4 from '../SRC/promotion/offer-4.png'
import offer5 from '../SRC/promotion/offer-5.png'


export default class Promotions extends Component {
    render() {
    function LeftNavButton(props) {
        const {className, style, onClick} = props
        return (
            <div
                className="left-arrow"
                style={{...style, display: 'block', position:"absolute",top:"80px",left:"-15px"}}
                onClick={onClick}
            >
                <img src={left} alt="#" width="30px" style={{position:"absalute" ,cursor:"pointer"}}></img>
            </div>
            );
        }


    function RightNavButton(props) {
        const {className, style, onClick} = props
        return (
            <div
                className="right-arrow"
                style={{...style, display: 'block',float:"right",position:"absolute",top:"80px",right:"20px" ,zIndex:"10",cursor:"pointer"}}
                onClick={onClick}
            >
                <img src={right} alt="#" width="30px"></img>
            </div>
        );
        }
        

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <LeftNavButton />,
        prevArrow:<RightNavButton/>
        };
        

    return (
      <Container>
            <Slider {...settings}>
          <div>
            <img src={offer1} className="img" alt="#"></img>
          </div>
          <div>
            <img src={offer2} className="img" alt="#"></img>
          </div>
          <div>
            <img src={offer3} className="img" alt="#"></img>
          </div>
          <div>
            <img src={offer4} className="img" alt="#"></img>
          </div>
          <div>
            <img src={offer5} className="img" alt="#"></img>
          </div>
        </Slider>
      </Container>
        );
        
    }
    
    
}
const Container = style.div`
    padding:60px;
    boder-bottom:1px solid gray;
    .img{
        border-radius:5px;
        width:430px;
    }
`
