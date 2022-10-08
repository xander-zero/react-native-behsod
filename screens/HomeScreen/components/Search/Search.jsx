import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";

const Search = () => {
  return (
    <View className="flex-row items-center">
      <View className="relative flex-1">
        <TextInput
          placeholder="Search..."
          className="bg-gray-200 p-3 rounded-md pl-9"
        />
        <Text className="absolute left-1 top-2">
          <MagnifyingGlassIcon size={30} color="gray" />
        </Text>
      </View>
      <TouchableOpacity className="ml-1">
        <AdjustmentsVerticalIcon size={30} color="#FF6700" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
