import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput} from 'react-native';
import KittenList from '../components/KittenList';
import { useSelector, useDispatch } from 'react-redux';
import { getData, updateAmount } from '../redux/mainReducer';
import NumericInput from 'react-native-numeric-input'
import helpers from '../helpers/helpers';
import AmountButton from '../components/AmountButton';
import MyHeader from '../components/Header';
import Slider from '@react-native-community/slider';

const KittenListScreen = ({navigation}) => {
  const [number, setNumber] = useState(30);
  const [edit, setEdit] = useState(false);
  const kittenData = useSelector(state => state.showKittens);
  const kittens = useSelector(state => state.kittens);
  const dispatch = useDispatch();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const updateDataAmount = (amount) => {
    const newData = kittens.slice(0, amount);
    dispatch(updateAmount(newData));
  };

  useEffect(()=>{
    navigation.setParams({ selectAmount: selectionAmount });
  }, []);

  useEffect(()=>{
    navigation.setParams({ selectAmount: selectionAmount });
  }, [edit]);

  const selectionAmount = () => {
    setEdit(!edit);
  };

  return(
    <>
      <View style={styles(screenWidth, screenHeight).container}>
        {edit && <View style={styles(screenWidth, screenHeight).amountMain}>
          <View style={styles(screenWidth, screenHeight).amountSelection}>
            <AmountButton
              onPress={()=>{
                setNumber(30)
                updateDataAmount(30)
              }}
              kittenAmount={number}
              selectedStyle={styles(screenWidth, screenHeight).amountButtonSelected}
              style={styles(screenWidth, screenHeight).amountButton}
              amount={30}
              textStyle={styles(screenWidth, screenHeight).amountText}
              />
            <AmountButton
              onPress={()=>{
                setNumber(50)
                updateDataAmount(50)
              }}
              kittenAmount={number}
              selectedStyle={styles(screenWidth, screenHeight).amountButtonSelected}
              style={styles(screenWidth, screenHeight).amountButton}
              amount={50}
              textStyle={styles(screenWidth, screenHeight).amountText}
              />
            <AmountButton
              onPress={()=>{
                setNumber(100)
                updateDataAmount(100)
              }}
              kittenAmount={number}
              selectedStyle={styles(screenWidth, screenHeight).amountButtonSelected}
              style={styles(screenWidth, screenHeight).amountButton}
              amount={100}
              textStyle={styles(screenWidth, screenHeight).amountText}
              />
          </View>
          <View style={styles(screenWidth, screenHeight).amountInsert}>
            <TextInput
               style={styles(screenWidth, screenHeight).textInput}
               keyboardType='numeric'
               onChangeText={(number)=> {
                 setNumber(number)
                 updateDataAmount(number)
               }}
               value={number.toString()}
            />
            <Slider
              style={styles(screenWidth, screenHeight).slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={number}
              onValueChange={(number)=>{
                setNumber(number)
                updateDataAmount(number)
              }}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        </View>
      }
        <KittenList
          data={kittenData}
          navigation={navigation}
          >
        </KittenList>
      </View>
    </>
  );
};

KittenListScreen.navigationOptions = ({navigation}) => {
  const type = 'list';
  return MyHeader(navigation, type);
};

const styles = (screenWidth, screenHeight) => StyleSheet.create({
  container: {
    flex:1
  },
  amountSelection:{
    flexDirection: 'row',
  },
  amountMain:{
  },
  amountInsert:{
    alignItems: 'center',
  },
  textInput:{
    borderWidth:2,
    borderColor: '#E56B70',
    fontSize: 20,
    width: screenWidth * 0.3,
    height: screenHeight * 0.05,
    textAlign: 'center',
  },
  slider:{
    width: screenWidth * 0.8,
    height: screenHeight * 0.05,
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
  amountButtonSelected:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.1,
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
  }
});

export default KittenListScreen;
