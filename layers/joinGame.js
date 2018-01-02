import React, { Component } from "react";
import {
  AppRegistry,
  Animated,
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
  Image,
  View,
  Button,
  Alert,
  StatusBar,
  Dimensions,
  LayoutAnimation,
  ImageBackground,
  TouchableOpacity,
  InteractionManager
} from "react-native";
import navigation from "react-navigation";

//import { DangerZone } from "expo";
//const { Lottie } = DangerZone;
import home from "../layers/home";
import room from "../layers/room";
import Matrix from "../utilities/matrixTrans"

class RoomCode extends React.Component {
  constructor() {
    super();
    this.state = { getcode: "", codeLength: 0, showInput: "ture" };
  }
  focusNextField(nextField, text) {
    if (nextField < 6) {
      this.refs[nextField].focus();
      this.setState({
        getcode: this.state.getcode + text,
        codeLength: this.state.codeLength + 1
      });
    } else {
      this.setState({
        getcode: this.state.getcode + text,
        codeLength: this.state.codeLength + 1,
        showInput: !this.state.showInput
        //这里需要后台验证并且载入“正在运行的动图”
      });
      Keyboard.dismiss();
      //here need to verify the code here
      this.props._transform();
      console.log('Hello world!');
      //setTimeout( this.props.navigate("room"), 500 );
      //this.props.navigate("room");

    }
  }

  render() {
    return (
      this.state.showInput && (<View style={styles.inputContainer}>
        <TextInput
          ref="1"
          onChangeText={t1 => this.focusNextField("2", t1)}
          underlineColorAndroid="transparent"
          style={styles.textinput}
          maxLength={1}
          caretHidden={true}
          returnKeyType="next"
          //autoFocus={true}
        />
        <TextInput
          ref="2"
          aw
          onChangeText={t2 => this.focusNextField("3", t2)}
          underlineColorAndroid="transparent"
          style={styles.textinput}
          maxLength={1}
          caretHidden={true}
        />
        <TextInput
          ref="3"
          onChangeText={t3 => this.focusNextField("4", t3)}
          underlineColorAndroid="transparent"
          style={styles.textinput}
          maxLength={1}
          caretHidden={true}
        />
        <TextInput
          ref="4"
          onChangeText={t4 => this.focusNextField("5", t4)}
          underlineColorAndroid="transparent"
          style={styles.textinput}
          maxLength={1}
          caretHidden={true}
        />
        <TextInput
          ref="5"
          onChangeText={t5 =>
            this.focusNextField("6", t5) &
            console.log(this.state.getcode.length)
          }
          underlineColorAndroid="transparent"
          style={styles.textinput}
          maxLength={1}
          caretHidden={true}
          returnKeyType="done"
        />
      </View>)
    );
  }
}

export default class joinGame extends React.Component {
  constructor(props) {
    super(props);
    this._transform = this._transform.bind(this);
    this.state = {
      matrix: Matrix.identify(),
      showAnimation: false
    };
  }
  _transform(){
    LayoutAnimation.linear();
    const transformOrigin = [122, 0];
    const translate = [
       1, 0, 0, 0,
       0, 1, 0, 0,
       0, 0, 1, 0,
       transformOrigin[0], transformOrigin[1], 0, 1
      ];
    const unUseTranslate = [
       1, 0, 0, 0,
       0, 1, 0, 0,
       0, 0, 1, 0,
       -transformOrigin[0], -transformOrigin[1], 0, 1
      ];
    const rotateMatrix = [
         0.5, 0, 0.87, -0.001,
        0.00, 1, 0.00,      0,
       -0.87, 0, 0.5,       0,
           0, 0,   0,       1
      ];
    // 结果矩阵
    // 先平移到旋转中心，再旋转
    let m = Matrix.multMatrix(translate, rotateMatrix);
    // 再平移回去
    m = Matrix.multMatrix(m, unUseTranslate);
    let that = this;
    setTimeout( function(){that.setState({ matrix: m })}, 800 );
    setTimeout( function(){that.setState({ matrix: m }); that.props.navigation.navigate("room")}, 1600 );
  };
  render() {
    const { goBack, navigate, state } = this.props.navigation;
    global.joinGameKey = this.props.navigation.state.key;
    return (
      <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/bg_join.png")}
            style={styles.backgroundImage}
          >
            <View style={styles.back}>
              <TouchableOpacity
                style={{ width: 35, height: 35, margin: 10 }}
                onPress={() => goBack()}
              >
                <Image
                  source={require("../assets/icon/back.png")}
                  accessibilityLabel="返回"
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
              <Image
                source={require("../assets/images/img_1.png")}
                style={[
                  { position: "absolute", top:0, left: 85, width: 225, height: 515 },
                    {transform: [{matrix: this.state.matrix}]}
                ]}
              />
            </View>
            <View
              style={{
                flex: 0.7,
                justifyContent: "center",
                paddingBottom: 170
              }}
            >
              <RoomCode navigate={this.props.navigation.navigate} _transform={this._transform}/>
            </View>
            {(<View
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
            </View>)}
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
    //resizeMode: "stretch" // or 'stretch'
  },
  back: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  inputContainer: {
    //flex: 0.5,
    flexDirection: "row",
    justifyContent: "center"
  },
  textinput: {
    fontSize: 16,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(0,0,0,1)",
    //justifyContent: "center",
    //alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  btnContainer: {
    marginTop: 2,
    width: 198,
    height: 38,
    backgroundColor: "#75a1a3",
    alignSelf: "center",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    alignSelf: "center"
  }
});
