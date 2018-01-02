import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Keyboard,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { goBack } from "react-navigation";
const Screen = Dimensions.get("window");

export default class signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../assets/images/picture12.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.image} />
        <View
          style={{
            flex: 0.5,
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.content}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textinput}
              placeholder="昵称"
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textinput}
              placeholder="电子邮件/手机"
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textinput}
              placeholder="密码"
              secureTextEntry={true}
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textinput}
              placeholder="确定密码"
              secureTextEntry={true}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.btnContainer}
            >
              <Text style={styles.btnText}>注册</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text>已经有账户了?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{ alignItems: "flex-end" }}
              >
                <Text
                  style={{
                    //fontSize: 12,
                    textDecorationLine: "underline"
                  }}
                >
                  点此登录
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 0.3,
    marginTop: 10,
    paddingTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
    alignItems: "center"
  },
  content: {
    justifyContent: "space-between",
    paddingHorizontal: 30,
    margin: 10,
    padding: 10,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)"
  },
  btnContainer: {
    margin: 5,
    marginTop: 10,
    justifyContent: "center",
    height: 30,
    alignSelf: "stretch",
    //borderWidth: 1,
    //borderColor: "#fff",
    backgroundColor: "rgba(32, 131, 135, 0.7)"
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    paddingHorizontal: 30,
    justifyContent: "space-around"
  },
  footer: {
    flex: 0.1,
    paddingTop: 20,
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
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
  textinput: {
    fontSize: 14,
    height: 30,
    padding: 5,
    margin: 5,
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  btnText: {
    fontSize: 14,
    color: "white",
    textAlign: "center"
  }
});
