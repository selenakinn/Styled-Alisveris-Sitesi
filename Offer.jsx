import React from 'react';
import { sahteVeri } from '../sahteVeri';
import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const items = [
  {
    src: 'https://i.ibb.co/pR25Ks6/winter.jpg',
    title: 'Kış Kampanyası',
    text: '%50 indirimli ürünler sizi bekliyor',
    id: 1,
  },
  {
    src: 'https://i.ibb.co/6FMQMFf/pizza.jpg',
    title: 'Gel Al Kampanyası',
    text: '2. pizza bedava',
    id: 2,
  },
  {
    src: 'https://i.ibb.co/0mvwD5D/fries.jpg',
    title: 'Yanında Pazatates Kızartması',
    text: 'Büyük boy alana bedava',
    id: 3,
  },
];
function Offer(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = sahteVeri;
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.text} captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Offer;
