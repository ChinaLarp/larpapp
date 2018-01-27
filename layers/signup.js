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
            paddingTop: Screen.height * 0.0585,
            paddingLeft: Screen.width * 0.0486,
            paddingRight: Screen.width * 0.0486,
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
              <Text style={{ fontSize: Screen.height * (1 / 48) }}>
                已经有账户了?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{ alignItems: "flex-end" }}
              >
                <Text
                  style={{
                    fontSize: Screen.height * (1 / 48),
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
    paddingHorizontal: Screen.width * 0.073,
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
    height: Screen.height * 0.044,
    alignSelf: "stretch",
    //borderWidth: 1,
    //borderColor: "#fff",
    backgroundColor: "rgba(32, 131, 135, 0.7)"
  },
  buttons: {
    flexDirection: "row",
    marginBottom: Screen.height * 0.035,
    marginHorizontal: Screen.width * 0.058,
    paddingHorizontal: Screen.width * 0.073,
    justifyContent: "space-around"
  },
  footer: {
    flex: 0.1,
    paddingTop: Screen.height * 0.029,
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
    fontSize: Screen.height * (1 / 48),
    height: Screen.height * 0.044,
    padding: Screen.width * 0.012,
    margin: Screen.width * 0.012,
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  btnText: {
    fontSize: Screen.height * (1 / 48),
    color: "white",
    textAlign: "center"
  }
});
