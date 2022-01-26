/* eslint-disable prettier/prettier */

import React from 'react';
//import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { spacing } from '../../../utils/sizes';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info';

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContianer: {
    flex: 1,
    backgroundColor: '#559900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    padding: spacing.sm,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
