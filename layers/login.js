// this file is no longer useful

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class Login extends React.Component {
  render() {
    console.log("I am a console");
    return (
      <View
        style={{
          marginTop: 80,
          paddingTop: 80,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="请输入邮箱"
            style={styles.textinput}
            onChangeText={username => this.setStated({ username })}
            value={this.state.username}
          />
          <TextInput
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            placeholder="请输入密码"
            style={styles.textinput}
            onChangeText={password => this.setStated({ password })}
            value={this.state.username}
          />
          <TouchableOpacity
            onPress={onButtonPress}
            style={{ alignItems: "flex-end" }}
          >
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: "underline",
                color: "white"
              }}
            >
              忘记密码？
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity onPress={this.login} style={styles.btnContainer}>
            <Text style={styles.btnText}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>注册</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../image/login.png")}
            style={{ width: 320, height: 40 }}
          />
          <TouchableOpacity onPress={onButtonPress} style={{ marginTop: 10 }}>
            <Image
              source={require("../image/wx.png")}
              accessibilityLabel="微信登录"
              style={{ width: 50, height: 45 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  login = () => {
    global.pass = true;
    //this.props.setParentState({status: true})
    //AsyncStorage.setItem("showBtn", "show");
    //alert(this.state.username);
    //Post date to our Express backend point
    // -- You must fetch data via your clients IP, 'localhost' will never work
    /* 登录的设置
    fetch("http://190.158.1.122:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        // if our response is true, as set in Express route /users
        if (res.success === true) {
          var username = res.message;
          // We use AsyncStorage to store the users username
          AsyncStorage.setItem("username", username);
          // Then we will hide textinput area and show buttons 这里需要改
          this.props.navigator.push({ id: "Memberarea" });
        } else {
          alert(res.message);
        }
      })
      .done();
      */
  };
}

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    paddingBottom: 5,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)"
  },
  textinput: {
    fontSize: 14,
    height: 30,
    padding: 5,
    margin: 5,
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  btnContainer: {
    margin: 10,
    marginTop: 20,
    justifyContent: "center",
    height: 30,
    width: 120,
    alignSelf: "stretch",
    //borderWidth: 1,
    //borderColor: "#fff",
    backgroundColor: "rgba(32, 131, 135, 0.7)"
  },
  btnText: {
    fontSize: 14,
    color: "white",
    textAlign: "center"
  }
});
