import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealNavigator from './navigation/MealNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)

  if (!isFontLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setIsFontLoaded(true)}
            onError={() => console.log('error')}
        />
    )
  }

  return (
      <MealNavigator />
  )
}
