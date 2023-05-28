import { View, Text } from 'react-native'
import React from 'react'
import { routeStyles } from '../styles/routeStyle'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TopBarLinks() {
  return (
    <View style={routeStyles.topLinksContent}>
      <Text style={routeStyles.logo}>WhatsApp</Text>
      <View style={routeStyles.topButtons}>
    <Ionicons name="camera-outline" style={routeStyles.topButton}/>
    <Ionicons name="search" style={routeStyles.topButton}/>
    <Ionicons name='ellipsis-vertical' style={routeStyles.topButton}/>
      </View>
    </View>
  )
}