import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { chatStyle } from "../styles/chatStyle";
export default function ChatHeader({item, navigation}) {
  return (
    <View style={chatStyle.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={chatStyle.backButton}
        onPress={() => navigation.navigate("TabNavigator")}
      >
        <View style={chatStyle.backButtonContent}>
          <MaterialIcons name="arrow-back" style={chatStyle.backButtonIcon} />
          <Image
            source={{ uri: item.image }}
            style={chatStyle.backButtonImage}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={chatStyle.nameButton}>
        <View style={chatStyle.nameContent}>
          <Text style={chatStyle.nameText}>{item.name}</Text>
          <Text style={chatStyle.lastSeen}>Last seen today at 4:13 pm</Text>
        </View>
      </TouchableOpacity>
      <View style={chatStyle.headerIcons}>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="videocam" style={chatStyle.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="call" style={chatStyle.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialCommunityIcons
            name="dots-vertical"
            style={chatStyle.headerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
