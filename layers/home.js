import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from "react-native";
import { StackNavigator } from "react-navigation";
import signup from "./signup";
const Screen = Dimensions.get("window");

export default class home extends React.Component {
  constructor() {
    super();
    this.state = {
      status: true,
      registered: false,
      username: "",
      password: ""
    };
    //AsyncStorage.getItem("username", (error,result)=>());
    //AsyncStorage.setItem("showBtn", close);

    //var passed;
    //AsyncStorage.getItem("showBtn", (error, result) => (passed = result));
    //AsyncStorage.getItem("showBtn", (error, result) => Alert.alert(global.haha));
  }

  login = () => {
    this.setState({
      status: !this.state.status
    });
    //Post date to our Express backend point
    // -- You must fetch data via your clients IP, 'localhost' will never work
    /* 登录的设置
    fetch("https://usbackendwjn704.larpxiaozhushou.tk/api/web/", {
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

  render() {
    const { navigate } = this.props.navigation;
    //var passed;
    //AsyncStorage.getItem("showBtn", (error, result) => (passed = result));
    //AsyncStorage.getItem("showBtn", (error, result) => Alert.alert(this.passed));
    return (
      <ImageBackground
        source={require("../assets/images/picture12.png")}
        style={styles.backgroundImage}
      >
        <StatusBar hidden={true} />
        <View
          style={{
            flex: 0.2,
            justifyContent: "flex-start",
            alignItems: "flex-end",
            paddingTop: 10,
            paddingRight: 10
          }}
        >
          {!this.state.status && (
            <TouchableOpacity onPress={onButtonPress}>
              <Image
                source={require("../assets/images/achievement.png")}
                accessibilityLabel="我的成就"
                style={{
                  height: Screen.width * 0.09,
                  width: Screen.width * 0.09
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 0.6,
            justifyContent: "space-around",
            paddingLeft: Screen.width * (12 / 100),
            paddingRight: Screen.width * (12 / 100)
          }}
        >
          {this.state.status && (
            <View
              style={{
                marginTop: Screen.height * (12 / 100),
                paddingTop: Screen.height * (12 / 100),
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="请输入邮箱"
                  style={styles.textinput}
                  onChangeText={username => this.setState({ username })}
                  value={this.state.username}
                />
                <TextInput
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  placeholder="请输入密码"
                  style={styles.textinput}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
                <TouchableOpacity
                  onPress={onButtonPress}
                  style={{ alignItems: "flex-end" }}
                >
                  <Text
                    style={{
                      fontSize: Screen.height * (0.9 / 48),
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
                <TouchableOpacity
                  onPress={this.login}
                  style={styles.btnContainer}
                >
                  <Text style={styles.btnText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate("signup")}
                  style={styles.btnContainer}
                >
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
                  source={require("../assets/images/login.png")}
                  style={{
                    width: Screen.width * 0.78,
                    height: Screen.height * 0.06
                  }}
                />
                <TouchableOpacity
                  onPress={onButtonPress}
                  style={{ marginTop: 10 }}
                >
                  <Image
                    source={require("../assets/icon/wx.png")}
                    accessibilityLabel="微信登录"
                    style={{
                      width: Screen.width * 0.122,
                      height: Screen.height * 0.066
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {!this.state.status && (
            <View
              style={{
                flex: 0.4,
                padding: 10,
                paddingTop: Screen.height * 0.234,
                paddingBottom: Screen.height * 0.044,
                justifyContent: "space-around",
                opacity: 0.9
              }}
            >
              <TouchableOpacity
                onPress={() => navigate("newGame")}
                style={{
                  justifyContent: "center",
                  height: Screen.height * (1.3 / 24),
                  width: Screen.width * (5 / 7),
                  alignSelf: "stretch",
                  //borderWidth: 1,
                  //borderColor: "#fff",
                  backgroundColor: "rgba(32, 131, 135, 0.9)"
                }}
              >
                <Text style={styles.btnText}>寻找新的故事</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigate("joinGame")}
                style={{
                  justifyContent: "center",
                  height: Screen.height * (1.3 / 24),
                  width: Screen.width * (5 / 7),
                  alignSelf: "stretch",
                  //borderWidth: 1,
                  //borderColor: "#fff",
                  backgroundColor: "rgba(117, 161, 163, 0.9)"
                }}
              >
                <Text style={styles.btnText}>继续游戏/加入游戏</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            opacity: 0.8,
            marginTop: 20,
            paddingRight: 40
          }}
        >
          {!this.state.status && (
            <TouchableOpacity
              onPress={onButtonPress}
              style={{
                paddingHorizontal: 5,
                height: Screen.height * (1 / 24),
                backgroundColor: "rgba(117, 161, 163, 0.9)",
                justifyContent: "center"
              }}
            >
              <Text style={styles.btnText}>选项</Text>
            </TouchableOpacity>
          )}
          {true && (
            <TouchableOpacity
              onPress={this.clear}
              style={{
                paddingHorizontal: 5,
                height: Screen.height * (1 / 24),
                backgroundColor: "rgba(169, 169, 169, 0.9)",
                justifyContent: "center"
              }}
            >
              <Text style={styles.btnText}>关于(logoff)</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    );
  }

  clear = () => {
    console.log(Screen.width, Screen.height);
    this.setState({
      status: !this.state.status
    });
  };
}

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1
    //justifyContent: "center",
    //alignSelf: "stretch",
    //width: null,
    //padding: 40
    //resizeMode: "stretch" // or 'stretch'
  },
  //login part
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
    fontSize: Screen.height * (1 / 48),
    height: Screen.height * (1 / 24),
    padding: 5,
    margin: 5,
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  btnContainer: {
    margin: 10,
    marginTop: 20,
    justifyContent: "center",
    height: Screen.height * (1 / 24),
    width: Screen.width * (2 / 7),
    alignSelf: "stretch",
    //borderWidth: 1,
    //borderColor: "#fff",
    backgroundColor: "rgba(32, 131, 135, 0.7)"
  },
  btnText: {
    fontSize: Screen.height * (1 / 48),
    color: "white",
    textAlign: "center"
  }
});
