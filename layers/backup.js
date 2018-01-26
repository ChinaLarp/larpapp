/*
<View style={[styles.card, { transform: [{ rotate: "-2deg" }] }]}>
  <View style={styles.gamePic}>
    <Image
      source={require("../games/game1.png")}
      accessibilityLabel="万圣节之夜"
      style={{ width: 280, height: 205, margin: 10 }}
    />
  </View>

  <View style={styles.gameText}>
    <View style={{ alignItems: "flex-start" }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          alignItems: "center"
        }}
      >
        《万圣节之夜》
      </Text>
      <Text>又是一年万圣节之夜，社区在山顶别墅</Text>
      <Text>组织了一场盛大的化妆宴会。在美丽的</Text>
      <Text>焰火之下又有怎样的阴谋与龌龊……</Text>
      <Text />
      <Text>游戏人数：8 {gameList[1]["gameTitle"]}</Text>
    </View>
  </View>
  <View style={styles.createGame}>
    <TouchableOpacity
      onPress={onButtonPress}
      style={{ width: 60, height: 62 }}
    >
      <Image
        source={require("../games/create.png")}
        accessibilityLabel="创建游戏"
        style={{ width: 70, height: 72 }}
      />
    </TouchableOpacity>
  </View>
</View>
*/

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
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { goBack } from "react-navigation";
import Interactable from "react-native-interactable";

export default class newGame extends React.Component {
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
        gameTitle: "《风乍起》",
        gameInfo:
          "富不仁于新婚之夜惨死于家中书房，是谁在这么美好的夜晚下手。请团结起来找出真相。 \n 游戏时间4-6小时。\n  游戏人数： 8人 （推荐4男4女）"
      }
    ];
    const { goBack, navigate, state } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../image/newGame.png")}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <Image
            source={require("../image/back.png")}
            accessibilityLabel="返回"
            style={{ width: 35, height: 35, margin: 10 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.72 }}>
          {gameList.map((item, idx) => {
            return (
              <View
                key={idx}
                style={[styles.card, { transform: [{ rotate: "-2deg" }] }]}
              >
                <View style={styles.gamePic}>
                  <Image
                    source={item.gameUrl}
                    accessibilityLabel="万圣节之夜"
                    style={{ width: 280, height: 205, margin: 10 }}
                  />
                </View>

                <View style={styles.gameText}>
                  <View style={{ alignItems: "flex-start" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        alignItems: "center"
                      }}
                    >
                      {item.gameTitle}
                    </Text>
                    <Text>{item.gameInfo}</Text>
                  </View>
                </View>
                <View key={idx} style={styles.createGame}>
                  <TouchableOpacity
                    onPress={onButtonPress}
                    style={{ width: 60, height: 62 }}
                  >
                    <Image
                      source={require("../games/create.png")}
                      accessibilityLabel="创建游戏"
                      style={{ width: 70, height: 72 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
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
    justifyContent: "flex-start"
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



import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Animated } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class TinderCard extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>

        <Interactable.View style={styles.container}
          horizontalOnly={true}
          snapPoints={[
            {x: 390},
            {x: 0, damping: 0.8},
            {x: -390}
          ]}
          animatedValueX={this._deltaX}>
          <Animated.View style={[styles.card, {
            transform: [{
              rotate: this._deltaX.interpolate({
                inputRange: [-250, 0, 250],
                outputRange: ['10deg', '0deg', '-10deg']
              })
            }]
          }]}>

            <Image style={styles.image} source={require('../img/tinder-photo.jpg')} />

            <Animated.View style={[styles.overlay, {backgroundColor: '#de6d77'}, {
              opacity: this._deltaX.interpolate({
                inputRange: [-120, 0],
                outputRange: [0.8, 0],
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp'
              })
            }]}>
              <Text style={styles.overlayText}>Trash</Text>
            </Animated.View>

            <Animated.View style={[styles.overlay, {backgroundColor: '#2f9a5d'}, {
              opacity: this._deltaX.interpolate({
                inputRange: [0, 120],
                outputRange: [0, 0.8],
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp'
              })
            }]}>
              <Text style={styles.overlayText}>Keep</Text>
            </Animated.View>

          </Animated.View>
        </Interactable.View>

        <View style={{marginBottom: 40}}>
          <Text style={styles.text}>Swipe LEFT to trash</Text>
          <Text style={styles.text}>or RIGHT to keep</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    width: Screen.width + 80,
    alignSelf: 'center'
  },
  card: {
    width: Screen.width - 40,
    marginHorizontal: 20,
    borderColor: 'white',
    borderWidth: 3
  },
  image: {
    width: Screen.width - 40 - 6,
    height: Screen.width - 40 - 6
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    fontSize: 60,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaaaaa'
  }
});


{this.state.select && (
  <View style={styles.back}>
    <TouchableOpacity>
      <LottieView
        source={require("../assets/animation/openDoor.json")}
        progress={this.state.progress}
      />
      //style={{ width: 35, height: 35, margin: 10 }}
    </TouchableOpacity>
  </View>
)}


<TouchableOpacity
  style={styles.btnContainer}
  onPress={() => navigate("room")}
>
  <Text style={styles.btnText}>进入房间</Text>
</TouchableOpacity>

  if (RoomCode.codeLength == 5){() => navigate("room")}
  72 onChangeText={() => this.props.navigate("room")}

  onChangeText={t5 =>
    this.focusNextField("5", t5) &
    console.log(this.state.getcode.length)
  }

// 开门
{transform: matrix3d(0.5,0,0.87,-0.001,0.00,1,0.00,0,-0.87,0,0.5,0,0,0,0,1);}

componentDidMount() {
  this.animation.play();
}

{this.state.showAnimation && (
  <Animation
    ref={animation => {
      this.animation = animation;
    }}
    style={{ width: 200, height: 200, backgroundColor: "grey" }}
    source={require("../assets/exp1.json")}
    imageAssetsFolder={"../assets/images"}
    loop
    speed={2}
  />
)}

<Image
  source={require("../assets/images/join.png")}
  style={[
    { width: 200, height: 360 },
    {
      transform: [
        { perspective: 850 },
        { translateX: -Dimensions.get("window").width * 0.24 },
        { rotateY: "60deg" }
      ]
    }
  ]}
/>

transitDoor: [{ perspective: 850 }, { rotateY: "-60deg" }]

<View style={{ flex: 1 }}>
  {!this.state.showAnimation && (
    <ImageBackground
      source={require("../assets/join.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.back}>
        <TouchableOpacity
          style={{ width: 35, height: 35, margin: 10 }}
          onPress={() => goBack()}
        >
          <Image
            source={require("../image/back.png")}
            accessibilityLabel="返回"
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.7,
          justifyContent: "center",
          paddingBottom: 170
        }}
      >
        <RoomCode navigate={this.props.navigation.navigate} />
      </View>
      <View
        style={{ position: "absolute", bottom: 0, alignSelf: "center" }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 2
          }}
        >
          输入游戏代码进入房间
        </Text>
      </View>
    </ImageBackground>
  )}
  {this.state.showAnimation && (
    <ImageBackground
      source={require("../assets/images/img_0.png")}
      style={styles.backgroundImage}
    >
      <Image
        source={require("../assets/images/img_1.png")}
        style={[
          { position: "absolute", top:0, left: 85, width: 225, height: 515 },
            {transform: [{matrix: this.state.matrix}]}
        ]}
      />
      <View
        style={{ position: "absolute", bottom: 0, alignSelf: "center" }}
      >
        <Button onPress={() => this._transform()} title="变换" />
      </View>
    </ImageBackground>
  )}
</View>

<View
  style={{
    height: 80,
    justifyContent: "space-around",
    opacity: 0.9,
    paddingLeft: 50,
    paddingRight: 50
  }}
>
  <Button
    onPress={() => goBack()}
    title="返回"
    color="#208387"
    accessibilityLabel="返回"
  />
</View>


<Button
  onPress={() => navigate("newGame")}
  title="寻找新的故事"
  color="#208387"
  accessibilityLabel="寻找新的故事"
/>
<Button
  onPress={() => navigate("joinGame")}
  title="继续游戏/加入游戏"
  color="#75a1a3"  //rgb(117, 161, 163)
  accessibilityLabel="继续游戏、加入游戏"
/>

<TouchableOpacity
  onPress={() => navigate("newGame")}
  style={styles.btnContainer}
>
  <Text style={styles.btnText}>寻找新的故事</Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => navigate("joinGame")}
  style={styles.btnContainer}
>
  <Text style={styles.btnText}>继续游戏/加入游戏</Text>
</TouchableOpacity>

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

{!this.state.status && (
  <TouchableOpacity
    onPress={onButtonPress}
    style={{backgroundColor: "rgba(117, 161, 163, 0.9)"}}
  >

    <Text style={styles.btnText}>选项</Text>
  </TouchableOpacity>
)}
{true && (
  <TouchableOpacity
    onPress={this.clear}
    style={{backgroundColor: "rgba(192, 192, 192, 0.9)"}}
  >

    <Text style={styles.btnText}>关于(logoff)</Text>
  </TouchableOpacity>
)}
