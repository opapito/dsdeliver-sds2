import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
/*
  The scroll is NOT activated by default in React Native. It is necessary to use ScrollView instead of View to enable the screen scroll
*/
  const[orders, setOrders] = useState<Order[]>([]);
  const[isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();// true of false according focus

  const fetchData = () => {
    setIsloading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Error in feching data'))
      .finally(()=> setIsloading(false))
  }  

  useEffect(()=>{
    if  (isFocused){
      fetchData(); //Re-rendering page to exclude the delivered order
    }
  }, [isFocused]);


  const handleOnPress = (order: Order) =>{
    navigation.navigate('OrdersDetails', {
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading
        ?
        (<Text> Loading... </Text>)
        :
        (orders.map(order => (
          <TouchableWithoutFeedback
            key={order.id}
            onPress={() => handleOnPress(order)}
          >
            <OrderCard order={order} />
          </TouchableWithoutFeedback>
        )))
      }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight:'5%',
    paddingLeft:'5%',
  }
});