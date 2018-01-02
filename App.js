import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from "react-native";
import { StackNavigator } from "react-navigation";
import joinGame from "./layers/joinGame";
import newGame from "./layers/newGame";
import home from "./layers/home";
import room from "./layers/room";
import signup from "./layers/signup";

const LarpApp = StackNavigator(
  {
    Home: { screen: home },
    newGame: { screen: newGame },
    joinGame: { screen: joinGame },
    room: { screen: room },
    signup: { screen: signup }
  },
  {
    headerMode: "none",
    header: "null"
  }
);

export default class App extends React.Component {
  render() {
    global.pass = false;
    return <LarpApp />;
  }
}
