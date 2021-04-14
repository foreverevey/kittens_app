import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AmountButton = (props) => {
  if(props.kittenAmount === props.amount){
    return (
      <TouchableOpacity testID='amount-button_a' style={props.selectedStyle} onPress={props.onPress}>
        <Text style={props.textStyle}>{props.amount}</Text>
      </TouchableOpacity>
    )
  } else {
    return(
      <TouchableOpacity testID='amount-button_b' style={props.style} onPress={props.onPress}>
        <Text style={props.textStyle}>{props.amount}</Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
});

export default AmountButton;
