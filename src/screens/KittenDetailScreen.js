import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const KittenDetailScreen = ({navigation}) => {
  const item = navigation.getParam('data');

  return(
    <>
      <Text>Kitten detail screen</Text>
      <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }}/>
      <Text>{item.name}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default KittenDetailScreen;
