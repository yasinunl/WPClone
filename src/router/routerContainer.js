import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import TopBarLinks from "../components/topBarLinks";
import StackNavigator from "../navigator/stackNavigator";

const { width, height } = Dimensions.get("window");

export default function RouterContainer() {
   return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={{ width: width, height: "100%" }}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
