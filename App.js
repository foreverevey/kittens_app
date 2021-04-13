import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, NetInfo } from "react-native";
import KittenListScreen from './src/screens/KittenListScreen';
import KittenDetailScreen from './src/screens/KittenDetailScreen';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { kittenUrls, kittenNames } from './src/data/kittenData';
import { Provider as KittenProvider } from 'react-redux';
import store from './src/redux/store';
import { getData } from './src/redux/mainReducer';
import helpers from './src/helpers/helpers';

const navigator = createStackNavigator({
  Main: KittenListScreen,
  Detail: KittenDetailScreen
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'Kitten List'
  }
});

const App = createAppContainer(navigator);

export default () =>{
  const [ready, setReady] = useState(false);

  const kittenData = helpers.randomKittenGenerator(30);

  const _cacheResourcesAsync = async () => {
    // images is data of kitten links
    const images = kittenUrls;
    const cacheImages = images.map(image => {
      return Image.prefetch(image.url);
    });

    store.dispatch(getData(kittenData));
    return Promise.all(cacheImages);
  };

  if (!ready) {
      return (
        <AppLoading
          startAsync={_cacheResourcesAsync}
          onFinish={() => setReady(true)}
          onError={console.warn}
        />
      );
    }
  else{
    return (
      <KittenProvider store={store}>
        <App/>
      </KittenProvider>
    )
  }

};
