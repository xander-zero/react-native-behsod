import { SafeAreaView } from "react-native";
import CarouselCards from "../CarouselCards/CarouselCards";
const SliderHeader = () => {
  return (
    <SafeAreaView className="flex-row items-center justify-center">
      <CarouselCards />
    </SafeAreaView>
  );
};

export default SliderHeader;
