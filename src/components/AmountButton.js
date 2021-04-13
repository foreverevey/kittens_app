import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AmountButton = (props) => {
  if(props.kittenAmount === props.amount){
    return (
      <TouchableOpacity style={props.selectedStyle} onPress={props.onPress}>
        <Text style={props.textStyle}>{props.amount}</Text>
      </TouchableOpacity>
    )
  } else {
    return(
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        <Text style={props.textStyle}>{props.amount}</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
});

export default AmountButton;
