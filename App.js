/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
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
/*
const styles = StyleSheet.create({
  appContianer: {
    flex: 1,
    backgroundColor: '#559900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    padding: spacing.sm,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

*/
