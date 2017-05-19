import React, { Component } from "react";
import { View } from "react-native";
import Home from "./components/Home/index";
export default class StoreFront extends Component {
  constructor() {
    super();
    this.state = {
      isReady: true
    };
  }  
  render() {    
    return <Home />;
  }
}