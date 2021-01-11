import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


/*
  By default, the stackNavigator passes some props to the route 
*/
type Props = {
  route:{
    params:{
      order:Order;
    }
  }
}

export default function OrderDetails({ route }: Props) {
  /*
    By default, a View component is NOT touchable. Using TouchableWithoutFeedback we can capture a view touch with the onPress event and attach a function on it
    In this case, we will return to HOME when the user touch the Header
  */
  const { order } = route.params;
  const navigation = useNavigation();

 const handleOnCancel = () =>{
   navigation.navigate('Orders');
 }

 const handleConfirmDelivery = () =>{
   confirmDelivery(order.id)
    .then(()=>{
      Alert.alert(`Order ${order.id} confirmed!`);
      navigation.navigate('Orders');
    })
    .catch(() => {
      Alert.alert(`Error confirming Order ${order.id}!`);
    })
 }

 const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
 }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>START NAVIGATION </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>DELIVERED</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});