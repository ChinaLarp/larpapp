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
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
import signup from "./signup";

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
                style={{ height: 40, width: 40 }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 0.6,
            justifyContent: "space-around",
            paddingLeft: 50,
            paddingRight: 50
          }}
        >
          {this.state.status && (
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
                  onChangeText={username => this.setState({ username })}
                  value={this.state.username}
                />
                <TextInput
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  placeholder="请输入密码"
                  style={styles.textinput}
                  onChangeText={password => this.setState({ password })}
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
                  style={{ width: 320, height: 40 }}
                />
                <TouchableOpacity
                  onPress={onButtonPress}
                  style={{ marginTop: 10 }}
                >
                  <Image
                    source={require("../assets/icon/wx.png")}
                    accessibilityLabel="微信登录"
                    style={{ width: 50, height: 45 }}
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
                paddingTop: 160,
                paddingBottom: 30,
                justifyContent: "space-around",
                opacity: 0.9
              }}
            >
              <Button
                onPress={() => navigate("newGame")}
                title="寻找新的故事"
                color="#208387"
                accessibilityLabel="寻找新的故事"
              />
              <Button
                onPress={() => navigate("joinGame")}
                title="继续游戏/加入游戏"
                color="#75a1a3"
                accessibilityLabel="继续游戏、加入游戏"
              />
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
            <Button
              onPress={onButtonPress}
              title="选项"
              color="#75b2a9"
              accessibilityLabel="选项"
            />
          )}
          {true && (
            <Button
              onPress={this.clear}
              title="关于(logoff)"
              color="gray"
              accessibilityLabel="关于"
            />
          )}
        </View>
      </ImageBackground>
    );
  }

  clear = () => {
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
