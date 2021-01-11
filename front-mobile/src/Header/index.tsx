import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  /*
    By default, a View component is NOT touchable. Using TouchableWithoutFeedback we can capture a view touch with the onPress event and attach a function on it
    In this case, we will return to HOME when the user touch the Header
  */
 const navigation = useNavigation();

 const handleOnPress = () =>{
   navigation.navigate('Home');
 }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
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
