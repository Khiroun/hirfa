import * as React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </View>
  );
}
