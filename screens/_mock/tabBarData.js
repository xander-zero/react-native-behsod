import { lazy } from "react";
import {
  PhotoIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "react-native-heroicons/solid";

import CartScreen from "../CartScreen/CartScreen";
import ChatScreen from "../ChatScreen/ChatScreen";
import GalleryScreen from "../GalleryScreen/GalleryScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import LoginScreen from "../LoginScreen/LoginScreen";

// const HomeScreen = lazy(() => import("../HomeScreen/HomeScreen"));
// const LoginScreen = lazy(() => import("../LoginScreen/LoginScreen"));
// const CartScreen = lazy(() => import("../CartScreen/CartScreen"));
// const ChatScreen = lazy(() => import("../ChatScreen/ChatScreen"));
// const GalleryScreen = lazy(import("../GalleryScreen/GalleryScreen"));

export const tabBarData = [
  {
    id: "1",
    name: "Gallery",
    component: <GalleryScreen />,
    icon: <PhotoIcon />,
  },
  {
    id: "2",
    name: "Chat",
    component: <ChatScreen />,
    icon: <ChatBubbleBottomCenterIcon />,
  },
  {
    id: "3",
    name: "Home",
    component: <HomeScreen />,
    icon: <HomeIcon />,
  },
  {
    id: "4",
    name: "Cart",
    component: <CartScreen />,
    icon: <ShoppingBagIcon />,
  },
  {
    id: "5",
    name: "Login",
    component: <LoginScreen />,
    icon: <UserIcon />,
  },
];
