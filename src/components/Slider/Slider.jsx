import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://i.pinimg.com/736x/0c/a2/8a/0ca28ab08dab11608ed8cd592fdbfc78.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/564x/3f/86/6a/3f866a839871eec8c965531f725d8f25.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/52/a7/53/52a753e317986b10b57f1c7f579cd0d9.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/fd/1c/0e/fd1c0e78a0bc8f9c5b2337916f9c61fa.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/fb/11/70/fb117040aaf003a1aec13aafe2c08f67.jpg"></img>
      </div>
    </Slider>
  );
}