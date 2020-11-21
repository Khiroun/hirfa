import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { ActivityIndicator, Text, View } from "react-native";

import theme from "../../theme";

export default function Main() {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION).then((res) => {
      const { status } = res;
      if (status === "granted") {
        setGranted(true);
      }
    });
  }, []);

  useEffect(() => {
    if (granted) {
      Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      }).then((location) => {
        console.log(location);
        setLocation((prev) => {
          return {
            ...prev,
            ...location.coords,
          };
        });
      });
    }
  }, [granted]);
  console.log({ location });
  return (
    <View>
      <MapView region={location} style={{ height: 400, width: "100%" }}>
        <Marker coordinate={location} />
      </MapView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20 }}>Recherche de jobbeurs en cours</Text>
        <ActivityIndicator size={50} color={theme.COLORS.SUCCESS} />
      </View>
    </View>
  );
}
