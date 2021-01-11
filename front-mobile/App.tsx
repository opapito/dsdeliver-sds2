import { useFonts, OpenSans_400Regular, OpenSans_700Bold  } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';

/*
  (1) In React Native there is no DIV. Every time you want to create a <div> you use the tag <View>
  (2) Also, there is no <p>, <span>, <h1>. Every text is wrapped by the <Text> tag.
  (3) Css is written inside JavaScript code
  (4) The elements in React Native are "display flex" by default. Flex 1 means 100% of the view available.
  (5) The status bar is the one at top of device where the wi-fi sign, time and other informations are showed.

*/
export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }  
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
