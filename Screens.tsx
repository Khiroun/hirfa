import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Register from "./src/screens/Register";
import User from "./src/screens/User";
import Login from "./src/screens/Login";
import Map from "./src/screens/User/Map";
import GettingStarted from "./src/screens/GettingStarted";
import { AppProvider } from "./AppContext";
import Welcome from "./src/screens/User/Welcome";

export type RootStackParamList = {
  GettingStarted: undefined,
  User: undefined,
  Login: undefined,
  SignUp: undefined
  Map: undefined,
  UserWelcome: undefined
}

const Drawer = createDrawerNavigator<RootStackParamList>();


export default () => {
  return (
    <AppProvider>
      <Drawer.Navigator initialRouteName="GettingStarted">
        <Drawer.Screen
          name="GettingStarted"
          component={GettingStarted}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="UserWelcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="User" component={User} 
          options={{ headerShown: false }}
        
        />
        <Drawer.Screen name="Map" component={Map}
          options={{ headerShown: false }}
        
        />
        <Drawer.Screen
          name="SignUp"
          component={Register}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </AppProvider>
  );
};
