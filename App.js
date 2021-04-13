import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, AsyncStorage } from "react-native";
import KittenListScreen from './src/screens/KittenListScreen';
import KittenDetailScreen from './src/screens/KittenDetailScreen';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { kittenUrls, kittenNames } from './src/data/kittenData';
import { Provider as KittenProvider } from 'react-redux';
import store from './src/redux/store';
import { getData } from './src/redux/mainReducer';
import helpers from './src/helpers/helpers';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNetInfo} from "@react-native-community/netinfo";

const navigator = createStackNavigator({
  Main: KittenListScreen,
  Detail: KittenDetailScreen
}, {
  initialRouteName: 'Main'
});

const App = createAppContainer(navigator);

export default () =>{
  const [ready, setReady] = useState(false);
  const netInfo = useNetInfo();
  const kittenData = helpers.randomKittenGenerator(100);

  const _cacheResourcesAsync = async () => {
    const images = kittenUrls;
    const cacheImages = images.map(image => {
      return Image.prefetch(image.url);
    });
    const showKittens = kittenData.slice(0, 30);
    await AsyncStorage.setItem('kittenData', JSON.stringify(kittenData));
    store.dispatch(getData(kittenData, showKittens));
    return Promise.all(cacheImages);
  };

  const checkStorage = async () =>{
    const kittenData = await AsyncStorage.getItem('kittenData');
    if(kittenData){
      const showKittens = JSON.parse(kittenData).slice(0, 30);
      store.dispatch(getData(kittenData, showKittens));
      setReady(true);
    }
  };

  if(netInfo.isConnected === null){
    return(
      <View>
        <Spinner
          visible={true}
          textContent='Loading'
        />
      </View>
    );
  } else if(!netInfo.isConnected && !ready){
    checkStorage();
    return(
      <View>
        <Text>No internet connection!</Text>
      </View>
    );
  } else if (!ready) {
      return (
        <View>
          <Spinner
            visible={true}
            textContent='Loading'
          />
          <AppLoading
            startAsync={_cacheResourcesAsync}
            onFinish={() => setReady(true)}
            onError={console.warn}
          />
        </View>
      );
    } else {
    return (
      <KittenProvider store={store}>
        <App/>
      </KittenProvider>
    )
  }
};
