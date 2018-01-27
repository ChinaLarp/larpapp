import React, { Component } from "react";
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  Alert,
  StatusBar,
  LayoutAnimation,
  NativeModules,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { goBack } from "react-navigation";
const Screen = Dimensions.get("window");
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class newGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: Screen.height * 0.1317,
      left: Screen.width * 0.097,
      right: Screen.width * 0.097,
      bottom: Screen.height * 0.1317,
      width: Screen.width * 0.68,
      height: Screen.height * 0.3,
      y: 0,
      r: "-2deg",
      select: false
    };
  }

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: Screen.width * 0.827,
      height: Screen.height * 0.337,
      y: -50,
      r: "0deg",
      select: !this.state.select
    });
  };

  unPress = () => {
    // Animate the update
    console.log("?");
    LayoutAnimation.linear();
    this.setState({
      top: Screen.height * 0.1317,
      left: Screen.width * 0.097,
      right: Screen.width * 0.097,
      bottom: Screen.height * 0.1317,
      width: Screen.width * 0.68,
      height: Screen.height * 0.3,
      y: 0,
      r: "-2deg",
      select: false
    });
  };

  render() {
    let gameList = [
      {
        gameUrl: require("../games/game1.png"), //or 'http://.png'
        gameTitle: "《万圣节之夜》",
        gameInfo:
          "又是一年万圣节之夜，社区在山顶别墅组织了一场盛大的化妆宴会。在美丽的焰火之下又有怎样的阴谋与龌龊……  \n游戏人数：8人 （推荐4男4女）"
      },
      {
        gameUrl: require("../games/game2.png"),
        gameTitle: "《风·乍起》",
        gameInfo:
          "富不仁于新婚之夜惨死于家中书房，是谁在这么美好的夜晚下手。请团结起来找出真相。 \n 游戏时间4-6小时。\n  游戏人数： 8人 （推荐4男4女）"
      }
    ];
    const { goBack, navigate, state } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../assets/images/newGame.png")}
        style={styles.backgroundImage}
      >
        {!this.state.select && (
          <View style={styles.back}>
            <TouchableOpacity
              style={{
                width: Screen.width * 0.085,
                height: Screen.width * 0.085,
                margin: 10
              }}
              onPress={() => goBack()}
            >
              <Image
                source={require("../assets/icon/back.png")}
                accessibilityLabel="返回"
                style={{
                  width: Screen.width * 0.085,
                  height: Screen.width * 0.085
                }}
              />
            </TouchableOpacity>
          </View>
        )}

        {gameList.map((item, idx) => {
          return (
            <View
              key={idx}
              style={[
                {
                  //flex: 0.72,
                  padding: 10,
                  position: "absolute",
                  top: this.state.top,
                  left: this.state.left,
                  right: this.state.right,
                  bottom: this.state.bottom,
                  backgroundColor: "white",
                  borderColor: "#8e8a8a",
                  borderWidth: 1
                },
                { transform: [{ rotate: this.state.r }] }
              ]}
            >
              {this.state.select && (
                <View
                  key={idx}
                  style={{
                    flex: 0.1,
                    alignItems: "flex-end",
                    justifyContent: "flex-start"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: Screen.width * 0.085,
                      height: Screen.width * 0.085
                    }}
                    onPress={this.unPress}
                  >
                    <Image
                      source={require("../assets/corner.png")}
                      accessibilityLabel="返回"
                      style={{
                        width: Screen.width * 0.085,
                        height: Screen.width * 0.085
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View
                style={[
                  styles.gamePic,
                  { transform: [{ translateY: this.state.y }] }
                ]}
              >
                <Image
                  source={item.gameUrl}
                  accessibilityLabel={item.gameTitle}
                  style={{
                    width: this.state.width,
                    height: this.state.height,
                    margin: 10
                  }}
                />
              </View>

              <View style={styles.gameText}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text
                    style={{
                      fontSize: Screen.height * (1.2 / 48),
                      fontWeight: "bold",
                      alignItems: "center"
                    }}
                  >
                    {item.gameTitle}
                  </Text>
                  <Text style={{ fontSize: Screen.height * (1 / 48) }}>
                    {item.gameInfo}
                  </Text>
                </View>
              </View>
              {!this.state.select && (
                <View key={idx} style={styles.createGame}>
                  <TouchableOpacity
                    //onPress={() => console.log({ idx })}
                    onPress={this._onPress}
                    style={{
                      width: Screen.width * 0.17,
                      height: Screen.height * 0.105
                    }}
                  >
                    <Image
                      source={require("../games/create.png")}
                      accessibilityLabel="创建游戏"
                      style={{
                        width: Screen.width * 0.17,
                        height: Screen.height * 0.105
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </ImageBackground>
    );
  }

  Next(key) {
    this.setData({
      gameList: props.gameList.push()
    });
  }
}

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
    //justifyContent: "center",
    //alignSelf: "stretch"
    //width: null,
    //padding: 40
    //resizeMode: "stretch" // or 'stretch'
  },
  back: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  card: {
    //flex: 0.72,
    padding: 10,
    //marginLeft: 40,
    //marginRight: 40,
    position: "absolute",
    top: 0,
    left: 40,
    right: 40,
    bottom: 0,
    backgroundColor: "white",
    borderColor: "#8e8a8a",
    borderWidth: 1
  },
  gamePic: {
    flex: 0.4,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  gameText: {
    flex: 0.4,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  createGame: {
    flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 50
  }
});
