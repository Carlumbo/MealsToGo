import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar } from 'react-native';
import { spacing } from './src/utils/sizes';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}
