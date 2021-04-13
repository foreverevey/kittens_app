import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AmountButton = (props) => {

  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.amount}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
});

export default AmountButton;
