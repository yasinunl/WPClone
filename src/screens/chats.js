import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { routeStyles } from "../styles/routeStyle";
import ChatListComponent from "../components/chatListComponent";

export default function Chats({ navigation, sNavigator }) {
  return (
    <View style={routeStyles.container}>
      <ChatListComponent navigation={sNavigator}/>
      <StatusBar style="auto" />
    </View>
  );
}
