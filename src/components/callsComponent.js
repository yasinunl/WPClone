import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { routeStyles } from "../styles/routeStyle";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  
  const data = [
    {
      "_id": "647350c309379242e93fc66f",
      "image": "https://picsum.photos/id/78/80/80",
      "name": "Bishop Jarvis",
      "isActive": true,
      "isGet": true,
      "isVideo": true,
      "registered": "2023-05-03 05:37"
    },
    {
      "_id": "647350c3c70ffff2cfbc9e7c",
      "image": "https://picsum.photos/id/85/80/80",
      "name": "Bonita Brock",
      "isActive": true,
      "isGet": true,
      "isVideo": true,
      "registered": "2023-05-09 05:16"
    },
    {
      "_id": "647350c311c58e355cd5577e",
      "image": "https://picsum.photos/id/66/80/80",
      "name": "Vargas Sherman",
      "isActive": false,
      "isGet": false,
      "isVideo": true,
      "registered": "2023-05-27 12:47"
    },
    {
      "_id": "647350c305075cd64d244404",
      "image": "https://picsum.photos/id/29/80/80",
      "name": "Farley Nguyen",
      "isActive": true,
      "isGet": false,
      "isVideo": false,
      "registered": "2023-05-15 03:03"
    },
    {
      "_id": "647350c345eae06272c4f604",
      "image": "https://picsum.photos/id/49/80/80",
      "name": "Trudy Nielsen",
      "isActive": false,
      "isGet": false,
      "isVideo": true,
      "registered": "2023-05-14 09:34"
    },
    {
      "_id": "647350c33bf6c681ec0c8d83",
      "image": "https://picsum.photos/id/1/80/80",
      "name": "Helene Acevedo",
      "isActive": false,
      "isGet": true,
      "isVideo": true,
      "registered": "2023-05-05 01:40"
    },
    {
      "_id": "647350c3893b984ca43b382b",
      "image": "https://picsum.photos/id/22/80/80",
      "name": "Becky Griffin",
      "isActive": false,
      "isGet": false,
      "isVideo": false,
      "registered": "2023-05-15 04:02"
    },
    {
      "_id": "647350c30a6ee7a1c3dcbb70",
      "image": "https://picsum.photos/id/58/80/80",
      "name": "Willis Lancaster",
      "isActive": true,
      "isGet": false,
      "isVideo": true,
      "registered": "2023-05-23 06:36"
    },
    {
      "_id": "647350c304020b24fe8d388d",
      "image": "https://picsum.photos/id/91/80/80",
      "name": "Knowles Bird",
      "isActive": true,
      "isGet": false,
      "isVideo": true,
      "registered": "2023-05-08 04:45"
    },
    {
      "_id": "647350c30c3946e2deb4e9ac",
      "image": "https://picsum.photos/id/21/80/80",
      "name": "Rice Ewing",
      "isActive": true,
      "isGet": true,
      "isVideo": false,
      "registered": "2023-05-28 12:36"
    }
  ].sort((a, b) =>
     Date.parse(a.registered) > Date.parse(b.registered)
        ? -1
        : 1
  );
  
  const getDate = (registered) => {
    const today = new Date();
    const dateIso = new Date(registered);
    const date = (today - dateIso) / (1000 * 60 * 60 * 24);
    if (date < 2 && date > 1) {
      return "Yesterday";
    } else if (date >= 2) {
      return registered.split(" ", 1);
    } else {
      if (dateIso.getDay() < today.getDay()) return "Yesterday";
      if (dateIso.getHours() >= 5 && dateIso.getHours() < 12)
        return (
          "Morning " +
          dateIso.getHours().toString() +
          ":" +
          dateIso.getMinutes().toString()
        );
      else if (dateIso.getHours() >= 12 && dateIso.getHours() < 17)
        return (
          "Afternoon " +
          dateIso.getHours().toString() +
          ":" +
          dateIso.getMinutes().toString()
        );
      else if (dateIso.getHours() >= 17 && dateIso.getHours() < 21)
        return (
          "Evening " +
          dateIso.getHours().toString() +
          ":" +
          dateIso.getMinutes().toString()
        );
      else
        return (
          "Night " +
          dateIso.getHours().toString() +
          ":" +
          dateIso.getMinutes().toString()
        );
    }
  };
  
  const GetStories = ({ item }) =>
    (
      <TouchableOpacity style={routeStyles.storiesBox}>
        <TouchableOpacity style={routeStyles.storiesFoto}>
          <View style={routeStyles.storiesCircleOp}>
            <Image source={{ uri: item.image }} style={routeStyles.storiesFoto} />
          </View>
        </TouchableOpacity>
        <View style={routeStyles.storiesDetails}>
          <Text style={routeStyles.storiesName}>{item.name}</Text>
          <View style={routeStyles.callDetail}>
            {item.isGet ? <AntDesign name="arrowdown" style={[routeStyles.getCallDetailIcon, item.isActive ? {color:"#25d065"} : {color:"#f06476"}]} /> : <AntDesign name="arrowdown" style={[routeStyles.setCallDetailIcon, item.isActive ? {color:"#25d065"} : {color:"#f06476"}]} />}
             <Text style={routeStyles.storiesDate}>{getDate(item.registered)}</Text></View>
        </View>
        {item.isVideo ? <MaterialIcons name="videocam" style={routeStyles.callIcon}/> : <MaterialIcons name="call" style={routeStyles.callIcon}/>}
        
      </TouchableOpacity>
    );
  
  const GetAllStories = () => (
    <View>
      <TouchableOpacity style={routeStyles.storiesBox}>
        <TouchableOpacity style={routeStyles.storiesFoto}>
          <View style={routeStyles.CallCircleOp}>
          <MaterialIcons name="link" style={routeStyles.callLink} />
          </View>
        </TouchableOpacity>
        <View style={routeStyles.storiesDetails}>
          <Text style={routeStyles.storiesName}>Create call link</Text>
          <Text style={routeStyles.storiesDate}>Share a link for your WhatsApp call</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{ height: 25, fontSize: 16, color: "#8e9ba4", marginLeft: 10, }}
      >
        Recent
      </Text>
      {data.map((item) => (
        <GetStories item={item} key={item._id} />
      ))}
    </View>
  );
  
  export default function CallsComponent() {
    return (
      <View style={routeStyles.storiesContent}>
        <ScrollView>
          <GetAllStories />
        </ScrollView>
      </View>
    );
  }
  