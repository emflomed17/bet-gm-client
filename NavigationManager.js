import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/screens/Home';
import ProfileScreen from './src/components/screens/Profile';
import NewsScreen from './src/components/screens/News';

const Tab = createBottomTabNavigator();

const NavigationManager = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Apuestas' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='News' component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationManager;
