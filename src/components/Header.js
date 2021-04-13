import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MyHeader = (navigation, type) => {

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const selectAmount = () =>{
    navigation.getParam('selectAmount')()
  };

  if(type === 'list'){
    return {
      headerStyle: {
        backgroundColor: '#ffaf7a',
        borderBottomColor: 'black',
        height: screenHeight * 0.15,
      },
      headerRight: () => (
        <View style={styles(screenWidth, screenHeight).container}>
          <TouchableOpacity
            style={styles(screenWidth, screenHeight).amountButton}
            onPress={()=>selectAmount()}>
            <FontAwesome style={styles(screenWidth, screenHeight).icon} name="list"/>
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => (
        <View style={styles(screenWidth, screenHeight).container}>
          <Text style={styles(screenWidth, screenHeight).headerTitle}>Kittens!</Text>
        </View>
      ),
      headerTitleAlign: 'center',
    };
  } else if (type === 'detail'){
    return {
      headerStyle: {
        backgroundColor: '#ffaf7a',
        borderBottomColor: 'black',
        height: screenHeight * 0.15,
      },
      headerLeft: () => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles(screenWidth, screenHeight).buttonLeft}
            onPress={()=>navigation.goBack()}>
            <FontAwesome
              style={styles(screenWidth, screenHeight).icon}
              name="angle-left"/>
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => (
        <View style={styles(screenWidth, screenHeight).container}>
          <Text style={styles(screenWidth, screenHeight).headerTitle}>Details!</Text>
        </View>
      ),
      headerTitleAlign: 'center',
    };
  }
};

const styles = (screenWidth, screenHeight) => StyleSheet.create({
  container:{
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: "center",
    flexDirection: 'row',
  },
  buttonLeft:{
    alignItems: 'center',
    marginLeft:10,
    width:60,
    textAlign:'center',
    textAlignVertical:'center',
    minHeight: screenHeight * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButton:{
    marginRight:15,
    minWidth: screenWidth*0.15,
    minHeight: screenHeight * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle:{
    fontSize: 24,
  },
  icon:{
    color:'#fff',
    fontSize:30
  }
})

export default MyHeader;
