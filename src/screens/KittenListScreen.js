import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import KittenList from '../components/KittenList';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/mainReducer';
import NumericInput from 'react-native-numeric-input'
import helpers from '../helpers/helpers';
import AmountButton from '../components/AmountButton';

const KittenListScreen = ({navigation}) => {
  const [number, setNumber] = useState(30);
  const kittenData = useSelector(state => state);
  const dispatch = useDispatch();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('data changed', number);
  }, [kittenData]);

  const updateDataAmount = (amount) => {
    const newData = helpers.randomKittenGenerator(amount);
    dispatch(getData(newData));
  }

  return(
    <>
      <View style={styles(screenWidth, screenHeight).container}>
        <View style={styles(screenWidth, screenHeight).amountSelection}>
          <AmountButton
            onPress={()=>{
              setNumber(30)
              updateDataAmount(30)
            }}
            style={styles(screenWidth, screenHeight).amountButton}
            amount='30'
            textStyle={styles(screenWidth, screenHeight).amountText}
            />
          <AmountButton
            onPress={()=>{
              setNumber(50)
              updateDataAmount(50)
            }}
            style={styles(screenWidth, screenHeight).amountButton}
            amount='50'
            textStyle={styles(screenWidth, screenHeight).amountText}
            />
          <AmountButton
            onPress={()=>{
              setNumber(100)
              updateDataAmount(100)
            }}
            style={styles(screenWidth, screenHeight).amountButton}
            amount='100'
            textStyle={styles(screenWidth, screenHeight).amountText}
            />
        </View>
        <KittenList
          data={kittenData}
          navigation={navigation}
          >
        </KittenList>
      </View>
    </>
  );
};

KittenListScreen.navigationOptions = {
  title: 'Kitten List',
  headerTitleStyle: { alignSelf: 'center' },
};

const styles = (screenWidth, screenHeight) => StyleSheet.create({
  container: {
    flex:1
  },
  amountSelection:{
    flexDirection: 'row',
  },
  amountButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.1,
    backgroundColor: '#E56B70',
    borderColor: 'white',
    borderWidth: 2,
  },
  amountText:{
    color: 'white',
    fontSize: 20,
  },
});

export default KittenListScreen;
