
import { DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../Screens";
import MyButton from "../components/MyButton";
import theme from "../theme";

type NavigationProp = DrawerNavigationProp<RootStackParamList, "Login">
type Props = {
  navigation: NavigationProp
}

export default function Login({ navigation } : Props) {
  return (
    <View>
      <Text>Login</Text>
      <View>
        <MyButton name="facebook" backgroundColor={theme.COLORS.FACEBOOK}>
          Se connecter avec Facebook
        </MyButton>
        <MyButton name="google" backgroundColor={theme.COLORS.ERROR}>
          Se connecter avec Google
        </MyButton>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor={theme.COLORS.GREY}
        />
        <TextInput
          secureTextEntry
          placeholder="Mot de passe"
          autoCapitalize="none"
          placeholderTextColor={theme.COLORS.GREY}
        />
      </View>
      <View>
        <MyButton backgroundColor={theme.COLORS.PRIMARY}>Se connecter</MyButton>

        <MyButton
          backgroundColor={theme.COLORS.TRANSPARENT}
          color={theme.COLORS.BLACK}
          onPress={() => navigation.navigate("SignUp")}
        >
          Créer un compte
        </MyButton>
      </View>
    </View>
  );
}
