import { Image, View } from "react-native";
import React, { useState } from "react";
import { chatStyle } from "../styles/chatStyle";
import ChatHeader from "../components/chatHeader";
import ChatContainer from "../components/chatContainer";
import ChatMessage from "../components/chatMessage";
export default function ChatScreen({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  return (
    <View style={chatStyle.container}>
      <Image
        source={require("../../assets/wpBackGround.jpg")}
        style={chatStyle.backGrounImage}
      />
      <ChatHeader item={route.params.item} navigation={navigation} />
      <ChatContainer messages={messages} />
      <ChatMessage setMessages={setMessages} messages={messages} />
    </View>
  );
}
