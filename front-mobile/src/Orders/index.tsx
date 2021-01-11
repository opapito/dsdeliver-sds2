import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
/*
  The scroll is NOT activated by default in React Native. It is necessary to use ScrollView instead of View to enable the screen scroll
*/
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
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