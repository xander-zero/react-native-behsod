import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen/HomeScreen";

import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  PhotoIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "react-native-heroicons/solid";
import { tabBarData } from "./_mock/tabBarData";
import CartScreen from "./CartScreen/CartScreen";
import ChatScreen from "./ChatScreen/ChatScreen";
import GalleryScreen from "./GalleryScreen/GalleryScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 8,
          right: 8,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <HomeIcon color={focused ? "#FF6700" : "gray"} />
              <Text className="mt-1">Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <ShoppingBagIcon color={focused ? "#FF6700" : "gray"} />
              <Text className="mt-1">Cart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <ChatBubbleBottomCenterIcon
                color={focused ? "#FF6700" : "gray"}
              />
              <Text className="mt-1">Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <PhotoIcon color={focused ? "#FF6700" : "gray"} />
              <Text className="mt-1">Gallery</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <UsersIcon color={focused ? "#FF6700" : "gray"} />
              <Text className="mt-1">Login</Text>
            </View>
          ),
        }}
      />
      {/* {tabBarData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="flex-col items-center">
                <HomeIcon color={focused ? "red" : "blue"} />
                <Text>{tab.name}</Text>
              </View>
            ),
          }}
        />
      ))} */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.025,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
