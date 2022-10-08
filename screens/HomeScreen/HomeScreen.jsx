import { View, SafeAreaView } from "react-native";
import React from "react";
import Search from "./components/Search/Search";
import SliderHeader from "./components/SliderHeader/SliderHeader";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4 bg-white py-4 mx-2 rounded-md shadow-sm">
        <Search />
      </View>
      <View>
        <SliderHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
