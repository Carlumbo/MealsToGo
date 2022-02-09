import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/Infrastructure/Theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utility/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'restaurant',
  Settings: 'settings',
  Map: 'map',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',

    tabBarInactiveTintColor: 'grey',
  };
};
//<Ionicons name={iconName} size={size} color={color} />
const NavTabs = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name='Restaurants'
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='Map' component={Map} options={{ headerShown: false }} />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <NavTabs />
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

/*
({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Restuarants') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })
      */
