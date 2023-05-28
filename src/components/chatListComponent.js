import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { routeStyles } from "../styles/routeStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const data = [
    {
      "_id": "64712fbf112f1db7ed7f029a",
      "image": "https://picsum.photos/id/1/80/80",
      "name": "Willie Russo",
      "about": "anim minim pariatur",
      "isActive": true,
      "registered": "2023-05-24 05:48"
    },
    {
      "_id": "64712fbfbb7b9b873c30ac61",
      "image": "https://picsum.photos/id/29/80/80",
      "name": "Hahn Beach",
      "about": "commodo Lorem nostrud",
      "isActive": false,
      "registered": "2023-05-24 10:33"
    },
    {
      "_id": "64712fbf6f8ffb55cb07cf22",
      "image": "https://picsum.photos/id/63/80/80",
      "name": "Jasmine Avila",
      "about": "Lorem ad excepteur velit",
      "isActive": true,
      "registered": "2023-05-24 13:38"
    },
    {
      "_id": "64712fbf1f035bf4bf54d8c2",
      "image": "https://picsum.photos/id/52/80/80",
      "name": "Thomas Kramer",
      "about": "laboris aute et irure voluptate",
      "isActive": true,
      "registered": "2023-05-24 18:52"
    },
    {
      "_id": "64712fbf12f7297a9d1760cb",
      "image": "https://picsum.photos/id/41/80/80",
      "name": "Casandra Cabrera",
      "about": "amet non nisi aute duis",
      "isActive": false,
      "registered": "2023-05-26 22:09"
    },
    {
      "_id": "64712fbf57d1294bbce80635",
      "image": "https://picsum.photos/id/42/80/80",
      "name": "Mabel Gilbert",
      "about": "aliqua ullamco sint tempor",
      "isActive": true,
      "registered": "2023-05-27 00:40"
    },
    {
      "_id": "64712fbf153eafd807a10e58",
      "image": "https://picsum.photos/id/8/80/80",
      "name": "Atkins Walsh",
      "about": "magna aliquip est eiusmod",
      "isActive": false,
      "registered": "2023-05-02 04:55"
    },
    {
      "_id": "64712fbfa32108a582eea1ce",
      "image": "https://picsum.photos/id/72/80/80",
      "name": "Fuentes Montgomery",
      "about": "veniam nostrud qui ut",
      "isActive": true,
      "registered": "2023-05-27 13:57"
    },
    {
      "_id": "64712fbf7098fd85acae102e",
      "image": "https://picsum.photos/id/88/80/80",
      "name": "Knight Roberson",
      "about": "ad adipisicing do",
      "isActive": true,
      "registered": "2023-05-27 09:23"
    },
    {
      "_id": "64712fbfb6694fc5dea8fa21",
      "image": "https://picsum.photos/id/85/80/80",
      "name": "Daniels Goodman",
      "about": "laborum minim consequat",
      "isActive": true,
      "registered": "2023-05-27 20:56"
    }
  ].sort((a,b) => (Date.parse(a.registered) > Date.parse(b.registered) ? -1 : 1));

const getDate = (registered) => {
  const today = new Date();
  const dateIso = new Date(registered);
  const date = (today - dateIso) / (1000 * 60 * 60 * 24);
  if (date < 2 && date > 1) {
    return("Yesterday");
  } else if (date >= 2) {
    return (registered.split(" ",1));
  } else {
    if (dateIso.getDay() < today.getDay()) return("Yesterday");
    if (dateIso.getHours() >= 5 && dateIso.getHours() < 12)
    return(
        "Morning " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 12 && dateIso.getHours() < 17)
    return(
        "Afternoon " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 17 && dateIso.getHours() < 21)
    return(
        "Evening " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else
    return(
        "Night " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
  }
};

const onChatBox = (item, navigation) => {
  navigation.navigate("ChatScreen", {item:item});
 // navigation.navigate('ChatScreen', {item: item})
}
const GetChatList = ({ item, navigation }) => (
  <TouchableOpacity style={routeStyles.chatBox} onPress={()=>onChatBox(item,navigation)}>
    <TouchableOpacity style={routeStyles.fotoButton}>
      <Image source={{ uri: item.image }} style={routeStyles.chatFoto} />
    </TouchableOpacity>
    <View style={routeStyles.chatInfo}>
      <View style={routeStyles.chatTopInfo}>
        <Text style={routeStyles.chatName}>{item.name}</Text>
        <Text style={routeStyles.chatDate}>{getDate(item.registered)}</Text>
      </View>
      <View style={routeStyles.chatBottomInfo}>
        {!item.isActive ? (
          <Ionicons
            name="ios-checkmark-outline"
            style={routeStyles.chechMark}
          />
        ) : (
          <Ionicons
            name="ios-checkmark-done-sharp"
            style={routeStyles.chechMarkDone}
          />
        )}
        <Text style={routeStyles.message}>
          {item.about.length > 36
            ? item.about.slice(0, 36) + "..."
            : item.about}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default function ChatListComponent({navigation}) {
  return (
    <View style={routeStyles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <GetChatList item={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
