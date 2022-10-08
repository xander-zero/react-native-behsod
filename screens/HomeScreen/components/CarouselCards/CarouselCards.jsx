import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";

import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../CarouselCardItem/CarouselCardItem";

import data from "../_mock/carouselData";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
    </View>
  );
};

export default CarouselCards;
