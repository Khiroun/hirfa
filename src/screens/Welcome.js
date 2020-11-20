import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import bgImage from "../../assets/background.jpg";
import theme from "../theme";

function WelcomeScreen(props) {
  return (
    <ImageBackground source={bgImage} style={styles.backGroundContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/hirfa-logoo.jpg")}
        />
        <Text style={styles.logotext}> HIRFA</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColor={theme.COLORS.GREY}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"password"}
          secureTextEntry={true}
          placeholderTextColor={theme.COLORS.GREY}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSign}
        onPress={() => navigation.navigate("Chosing")}
      >
        <Text style={styles.text}>SignUp!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //opacity : 0.5
  },
  logo: {
    width: 200,
    height: 120,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logotext: {
    color: "black",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 10,
    //opacity : 0.5
  },
  input: {
    width: 300,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(200, 200, 200, 50) ",
    color: "rgba(255, 255, 255, 0.7) ",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: "rgba(150, 150, 150, 50) ",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  btnSign: {
    width: 300,
    height: 50,
    borderRadius: 45,
    backgroundColor: "rgba(0, 200, 0, 50) ",
    justifyContent: "center",
    marginTop: 30,
  },
});
export default WelcomeScreen;
