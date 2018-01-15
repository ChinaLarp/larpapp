import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions
} from "react-native";
import { goBack, NavigationActions } from "react-navigation";
import Modal from "react-native-modal";
import home from "../layers/home";
import joinGame from "../layers/joinGame";
import joinGameKey from "../layers/joinGame";
const Screen = Dimensions.get("window");

export default class room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: null
    };
  }

  render() {
    let userList = [
      {
        userPic: require("../assets/avatar/1.jpg"), //or 'http://.png'
        userName: "长歌无影",
        userInfo: "帝王集团总裁，人生赢家，最近在投资一个几百亿的项目。",
        uToMe: "他是我暗恋的对象"
      },
      {
        userPic: require("../assets/avatar/xx.png"), //or 'http://.png'
        userName: "西西",
        userInfo: "帝王集团总裁家的追随者，十分体贴，著名影星。",
        uToMe: "我和他关系非常好"
      },
      {
        userPic: require("../assets/avatar/cat.jpg"), //or 'http://.png'
        userName: "瓜瓜1",
        userInfo: "帝王集团总裁家的猫，十分通人性，是一只网红猫。",
        uToMe: "我和他关系不是非常好"
      },
      {
        userPic: require("../assets/avatar/cat.jpg"), //or 'http://.png'
        userName: "瓜瓜2",
        userInfo: "帝王集团总裁家的猫，十分通人性，是一只网红猫。",
        uToMe: "我和他关系非常好红啊红啊后"
      },
      {
        userPic: require("../assets/avatar/cat.jpg"), //or 'http://.png'
        userName: "瓜瓜3",
        userInfo: "帝王集团总裁家的猫，十分通人性，是一只网红猫。",
        uToMe: "我和他关系非常好"
      },
      {
        userPic: require("../assets/avatar/cat.jpg"), //or 'http://.png'
        userName: "瓜瓜4",
        userInfo: "帝王集团总裁家的猫，十分通人性，是一只网红猫。",
        uToMe: "我和他关系非常好"
      },
      {
        userPic: require("../assets/avatar/cat.jpg"), //or 'http://.png'
        userName: "瓜瓜5",
        userInfo:
          "帝王集团总裁家的猫，十分通人性，是一只网红猫，是一只网红猫，是一只网红猫，是一只网红猫，是一只网红猫，是一只网红猫，是一只网红猫。",
        uToMe: "我和他关系非常非常非常非常非常非常好"
      }
    ];
    const { goBack, navigate } = this.props.navigation;
    let roomKey = this.props.navigation.state.key;
    return (
      <ImageBackground
        source={require("../assets/images/room.png")}
        style={styles.backgroundImage}
      >
        <StatusBar hidden={true} />
        <View
          style={[
            styles.avatarContainer,
            {
              transform: [
                {
                  matrix: [
                    0.8,
                    0,
                    0.0,
                    0.002,
                    0.0,
                    1,
                    0.0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                  ]
                }
              ]
            }
          ]}
        >
          <TouchableOpacity onPress={onButtonPress}>
            <Image
              source={require("../assets/Ahri.png")}
              accessibilityLabel="我"
              style={{
                width: Screen.width * (12 / 50),
                height: Screen.height * (14 / 100),
                margin: 10
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })}>
            <Image
              source={require("../assets/icon/people.png")}
              accessibilityLabel="玩家信息"
              style={{
                width: Screen.width * (1 / 10),
                height: Screen.height * (12 / 220),
                resizeMode: "stretch",
                margin: 5
              }}
            />
          </TouchableOpacity>
          <Modal
            isVisible={this.state.visibleModal === 1}
            animationIn={"slideInDown"}
            animationOut={"slideOutUp"}
            animationInTiming={1500}
            animationOutTiming={1500}
            backdropOpacity={0}
            onBackdropPress={() => this.setState({ visibleModal: null })}
            style={{
              margin: 10,
              marginTop: 30,
              justifyContent: "flex-start",
              alignItems: "flex-end"
            }}
          >
            <ScrollView>
              {userList.map((item, idx) => {
                return (
                  <View key={idx} style={styles.userCard}>
                    <View style={styles.userPicContainer}>
                      <Image
                        source={item.userPic}
                        accessibilityLabel={item.userName}
                        style={{
                          width: Screen.width * (1 / 6),
                          height: Screen.height * (3 / 32),
                          borderTopLeftRadius: 5
                        }}
                      />
                      <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                        {item.userName}
                      </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                      <View
                        style={{
                          padding: 5,
                          alignSelf: "center",
                          overflow: "hidden",
                          height: Screen.height * (3 / 32)
                        }}
                      >
                        <Text style={{ overflow: "hidden" }} numberOfLines={3}>
                          {item.userInfo}
                        </Text>
                      </View>
                      <Text
                        style={{
                          alignSelf: "center",
                          fontWeight: "bold"
                        }}
                        numberOfLines={1}
                      >
                        {item.uToMe}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              onPress={() => this.setState({ visibleModal: null })}
            >
              <Image
                source={require("../assets/icon/close.png")}
                accessibilityLabel="返回"
                style={{
                  margin: 5,
                  padding: 5,
                  width: Screen.width * (5 / 80),
                  height: Screen.height * (7 / 176),
                  resizeMode: "stretch"
                }}
              />
            </TouchableOpacity>
          </Modal>
          <TouchableOpacity onPress={() => this.setState({ visibleModal: 2 })}>
            <Image
              source={require("../assets/icon/setting.png")}
              accessibilityLabel="设置"
              style={{
                width: Screen.width * (1 / 10),
                height: Screen.height * (12 / 220),
                resizeMode: "stretch",
                margin: 5
              }}
            />
          </TouchableOpacity>
          <Modal
            isVisible={this.state.visibleModal === 2}
            animationIn={"slideInDown"}
            animationOut={"slideOutUp"}
            animationInTiming={1500}
            animationOutTiming={1500}
            backdropOpacity={0}
            onBackdropPress={() => this.setState({ visibleModal: null })}
            style={{ justifyContent: "flex-end", height: 300, width: 300 }}
          >
            <View style={styles.modalContent}>
              <Text>Hello!</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ visibleModal: null })}
            >
              <View style={styles.button}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity onPress={() => this.setState({ visibleModal: 3 })}>
            <Image
              source={require("../assets/icon/help.png")}
              accessibilityLabel="帮助"
              style={{
                width: Screen.width * (1 / 10),
                height: Screen.height * (11 / 220),
                resizeMode: "stretch",
                margin: 2,
                marginTop: 5
              }}
            />
          </TouchableOpacity>
          <Modal
            isVisible={this.state.visibleModal === 3}
            animationIn={"zoomInDown"}
            animationOut={"zoomOutUp"}
            animationInTiming={1500}
            animationOutTiming={1500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            onBackdropPress={() => this.setState({ visibleModal: null })}
          >
            <View style={styles.modalContent}>
              <Text>Hello!</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ visibleModal: null })}
            >
              <View style={styles.button}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>

        <View style={styles.back}>
          <TouchableOpacity onPress={() => goBack(global.joinGameKey)}>
            <Image
              source={require("../assets/icon/exit.png")}
              accessibilityLabel="退出房间"
              style={{
                width: Screen.width * (1 / 10),
                height: Screen.height * (11 / 220),
                resizeMode: "stretch",
                margin: 10
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarContainer: {
    //flex: 0.5,
    position: "absolute",
    top: 0,
    left: 0
  },
  iconContainer: {
    //flex: 0.5,
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1
    //resizeMode: "stretch" // or 'stretch'
  },
  back: {
    flex: 0.15,
    position: "absolute",
    bottom: 0,
    left: 0
  },
  userCard: {
    margin: 3,
    width: Screen.width * (2 / 3),
    height: Screen.height * (1 / 8),
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.7)",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  userPicContainer: {
    width: Screen.width * (1 / 6)
  },
  userInfoContainer: {
    width: Screen.width * (1 / 2)
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
