import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { History } from "./screens/History";
import Calculator from "./screens/Calculator";
// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// nämä pitää asentaa ennenkuin ohjelma toimii jos käy niin, että ohjelma ei toimi
// jain komponentit ja näytöt omiin komponentteihin ja nyt tehtävä toimii niin kuin haluan.
// paranneltu funktioiden nimiä 06.09.2022
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
