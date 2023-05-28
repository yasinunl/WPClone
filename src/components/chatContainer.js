import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";

const now = new Date();

export default function ChatContainer({ messages }) {
  const getMessages = () =>
    messages.length > 0
      ? messages.map((item, index) => (
          <View style={chatStyle.chatBoxRight} key={index}>
            <View>
              <Text style={chatStyle.chatText}>
                {item.message}
              </Text>
            </View>
            <Text style={chatStyle.chatTime}>{item.time} pm</Text>
          </View>
        ))
      :null;

  return (
    <View style={chatStyle.chatContainer}>
      <View style={chatStyle.chatBoxLeft}>
        <View>
          <Text style={chatStyle.chatText}>Welcome to my chat</Text>
        </View>
        <Text style={chatStyle.chatTime}>
          {now.getHours()}:{now.getMinutes()} pm
        </Text>
      </View>
      {getMessages()}
    </View>
  );
}
