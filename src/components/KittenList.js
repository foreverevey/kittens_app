import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions} from 'react-native';

const KittenList = ({ title, data, navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles(screenWidth, screenHeight).container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem= {({item}) => {
          return (
            <>
              <TouchableOpacity
                style={styles(screenWidth, screenHeight).item}
                onPress={()=>{navigation.navigate('Detail', {
                  data: item})}}>
                <View style={styles(screenWidth, screenHeight).view}>
                  <Image source={{ uri: item.url }} style={styles(screenWidth, screenHeight).image}/>
                  <Text style={styles(screenWidth, screenHeight).itemText}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
            );
            }}/>
    </View>
  );
};

const styles = (screenWidth, screenHeight) => StyleSheet.create({
  container: {
    flex:1
  },
  item:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  image:{
    height: screenHeight * 0.3,
    width: screenWidth * 0.8,
    marginBottom:5,
  },
  itemText:{
    justifyContent: 'center'
  },
  view:{
    alignItems: 'center',
  }
});

export default KittenList;
