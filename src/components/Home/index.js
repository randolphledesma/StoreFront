import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Product from "../Product/index.js";
import Chat from "../Chat/index.js";
import Profile from "../Profile/index.js";
import SideBar from "../../layouts/sidebar.js";

const Home = DrawerNavigator(
  {
    Product: { screen: Product },
    Chat: { screen: Chat },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default Home;