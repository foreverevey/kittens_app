import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView, 
  Image,
  Dimensions} from 'react-native';
import { LoremIpsum } from "lorem-ipsum";
import MyHeader from '../components/Header';

const KittenDetailScreen = ({navigation}) => {
  const item = navigation.getParam('data');
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 3,
      min: 2
    },
    wordsPerSentence: {
      max: 7,
      min: 4
    }
  });

  const randomWords = lorem.generateParagraphs(4);

  return(
    <>
      <Image source={{ uri: item.url }} style={styles(screenWidth, screenHeight).image}/>
      <Text style={styles(screenWidth, screenHeight).name}>{item.name}</Text>
      <Text style={styles(screenWidth, screenHeight).description}>{randomWords}</Text>
    </>
  );
};

KittenDetailScreen.navigationOptions = ({navigation}) => {
  const type = 'detail';
  return MyHeader(navigation, type);
};

const styles = (screenWidth, screenHeight) => StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight * 0.4
  },
  name:{
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
  },
  description:{
    marginLeft:10,
    marginTop:10,
  }
});

export default KittenDetailScreen;
