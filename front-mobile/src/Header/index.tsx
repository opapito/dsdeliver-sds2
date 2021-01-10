import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 80,
    paddingTop:45,
    flexDirection:'row',
    justifyContent:'center'

  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.024,
    color:'#FFF',
    marginLeft:15,
    fontFamily:'OpenSans_700Bold'
  }
});
/*
  (1) The React Native does not support 'em' unit, so in order do convet it to px we multiply the value by 16, so 0.15em x 16 = 024
  (2) The color code needs only the # and the three first letters 
*/
