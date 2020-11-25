import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import bgImage from "../../../assets/background.jpg";


export default function Welcome({navigation}) {
    return (
        
            <ImageBackground source={bgImage} style={styles.backGroundContainer}>
                <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/hirfa-logoo.jpg")}
        />
        <Text style={styles.logotext}> HIRFA</Text>
      </View>
      <TouchableOpacity
        style={styles.GettingStarted}
        onPress={() => navigation.navigate("User")}
      >
        <Text style={styles.text}>Trouvez des Jobbeurs prets de chez vous!!</Text>
      </TouchableOpacity>
            </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //opacity : 0.5
  },
  logo: {
    width: 300,
    height: 180,
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
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  GettingStarted: {
    width: 300,
    height: 50,
    borderRadius: 45,
    backgroundColor: "rgba(0, 200, 0, 50) ",
    justifyContent: "center",
    marginTop: 50,
  },
});