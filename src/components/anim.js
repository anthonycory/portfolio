import * as React from "react";
import { motion } from "framer-motion";
import Carousel from 'react-elastic-carousel';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

export default function anim() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const items = [{id: 1, title: 'item #1'},
  {id: 2, title: 'item #2'},
  {id: 3, title: 'item #3'},
  {id: 4, title: 'item #4'},
  {id: 5, title: 'item #5'}]
    return (
<div>
        <h2> Multiple items </h2>
        <Carousel itemsToScroll={2} itemsToShow={2}>
        {items.map(item => <div className="carousel-item" key={item.id}>{item.title}</div>)}
      </Carousel>
      </div>
    )
}
