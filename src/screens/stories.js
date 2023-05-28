import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { routeStyles } from '../styles/routeStyle'
import StoriesComponent from '../components/storiesComponent'

export default function Stories() {
  return (
    <View style={routeStyles.container}>
      <StoriesComponent />
    </View>
  )
}