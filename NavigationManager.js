import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import BetsScreen from './src/components/screens/Bets';
import ProfileScreen from './src/components/screens/Profile';
import NewsScreen from './src/components/screens/News';
import LoginScreen from './src/components/screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigationManager = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Apuestas' component={BetsScreen} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name='Apuestas' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='News' component={NewsScreen} />
      </Tab.Navigator>*/}
    </NavigationContainer>
  );
};

export default NavigationManager;
