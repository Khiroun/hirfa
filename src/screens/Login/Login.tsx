
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import ErrorMessage from "../Register/ErrorMessage";
import {NavigationProp} from './index'
type Props = {
  navigation: NavigationProp,
  handleLogin: ()=>void,
  email: string,
  password: string,
  setEmail: Function,
  setPassword: Function,
  errorMessage?: string
}

export default function Login({ navigation, handleLogin, email, password, setEmail, setPassword, errorMessage } : Props) {
  return (
    <View>
      <Text style={styles.h1}>Login</Text>
      {
        errorMessage && <ErrorMessage errorMessage={errorMessage} />
      }
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor={theme.COLORS.GREY}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry
          placeholder="Mot de passe"
          autoCapitalize="none"
          placeholderTextColor={theme.COLORS.GREY}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.fbButton}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.fbButtonText}>Se connecter avec facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.fbButtonText}>Se connecter avec google</Text>
        </TouchableOpacity>
        
      </View>
      
      <View>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpButtonText}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderRadius: 45,
    backgroundColor: "rgba(0, 200, 0, 50) ",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  h1:{
    alignSelf: "center",
    fontSize: 50,
    marginBottom: 50
  },
  form:{   
  },
  formInput:{
    marginBottom: 30,
    fontSize: 20,
    paddingHorizontal: 20
  },
  loginButton:{
    backgroundColor: theme.COLORS.SUCCESS,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 20,
    marginBottom:50  
  },
  loginButtonText:{
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    
  },
  fbButton:{
    backgroundColor: theme.COLORS.FACEBOOK,
    marginBottom: 20,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row"
  },
  googleButton:{
    backgroundColor: theme.COLORS.GOOGLE,
    marginBottom: 20,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row"
  },
  fbButtonText:{
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    marginLeft: 20
  },
  signUpButton:{},
  signUpButtonText:{
    color: "#000",
    textAlign: "center"
  }
})