import React, { useEffect, useRef, useState } from "react";
import Chats from "../screens/chats";
import Stories from "../screens/stories";
import Calls from "../screens/calls";
import { Text, View, Animated, Easing, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { routeStyles } from "../styles/routeStyle";
import Entypo from "react-native-vector-icons/Entypo";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopBarLinks from "../components/topBarLinks";

const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get("window");

export default function TabNavigator({ navigation }) {
  const [currentPage, setCurrentPage] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (currentPage === "Stories") {
      fadeIn(); // Start the animation when the component mounts
    } else {
      fadeOut();
    }
  }, [currentPage]);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: -80,
      easing: Easing.linear,
      duration: 100,
      useNativeDriver: true, // enables native driver
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      easing: Easing.linear,
      duration: 100,
      useNativeDriver: true, // enables native driver
    }).start();
  };
  const renderTabBarLabel = ({ children, focused }) => {
    return children !== "Groups" ? (
      <View
        style={{
          width: (width / 100) * 29,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            { fontWeight: "700", fontSize: 16 },
            focused ? { color: "#1ba385" } : { color: "#8e9ba4" },
          ]}
        >
          {children}
        </Text>
      </View>
    ) : (
      <View
        style={{
          width: (width / 100) * 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="account-group"
          style={[
            { fontSize: 22 },
            focused ? { color: "#1ba385" } : { color: "#8e9ba4" },
          ]}
        />
      </View>
    );
  };
  const setCurrentPageName = (route) => {
    setCurrentPage(route.route.name);
  };
  const getCurrentPagesButton = () =>
    currentPage === "Chats" ? (
      <View style={routeStyles.bottomButtons}>
        <MaterialCommunityIcons
          style={routeStyles.bottomButtonA}
          name="comment-text-outline"
        />
      </View>
    ) : currentPage === "Stories" ? (
      <>
        <Animated.View
          style={[
            routeStyles.editIconBox,
            { transform: [{ translateY: fadeAnim }] },
          ]}
        >
          <Entypo name="edit" style={routeStyles.editIcon} />
        </Animated.View>
        <View style={routeStyles.bottomButtons}>
          <MaterialCommunityIcons
            style={routeStyles.bottomButtonA}
            name="camera"
          />
        </View>
      </>
    ) : currentPage === "Calls" ? (
      <View style={routeStyles.bottomButtons}>
        <MaterialIcons style={routeStyles.bottomButtonA} name="add-call" />
      </View>
    ) : null;

  return (
    <>
      <TopBarLinks />
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#1f2c34" },
          tabBarItemStyle: { width: "auto", padding: 0 }, // Default tab item style
          tabBarLabel: renderTabBarLabel,
          tabBarIndicatorStyle: { backgroundColor: "#06a380", height: 3 },
        }}
        screenListeners={setCurrentPageName}
      >
        <Tab.Screen name="Groups" component={Stories} />
        {/* I didn't make this screen */}
        <Tab.Screen name="Chats">
          {(props) => <Chats {...props} sNavigator={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Stories" component={Stories} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
      {getCurrentPagesButton()}
    </>
  );
}
