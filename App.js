import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import LoginScreen from './src/components/screens/Login';
import { Ionicons } from '@expo/vector-icons';
import NavigationManager from './NavigationManager';

YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      {fontLoaded ? <NavigationManager /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
