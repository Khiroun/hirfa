import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Register from "./src/screens/Register";
import UserMain from "./src/screens/User/Main";
import Login from "./src/screens/Login";
import Map from "./src/screens/User/Map";
import GettingStarted from "./src/screens/GettingStarted";

export type RootStackParamList = {
  GettingStarted: undefined,
  UserMain: undefined,
  Login: undefined,
  SignUp: undefined
  Map: undefined,
}

const Drawer = createDrawerNavigator<RootStackParamList>();

export default () => {
  return (
    <Drawer.Navigator initialRouteName="UserMain">
      <Drawer.Screen
        name="GettingStarted"
        component={GettingStarted}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="UserMain" component={UserMain} />
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen
        name="SignUp"
        component={Register}
        options={{ drawerLabel: "Inscription", headerTitle: "Inscription" }}
      />
    </Drawer.Navigator>
  );
};