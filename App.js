/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


// Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
// Pages
import {MainPage} from './src/pages/MainPage';


const App = () => {
  
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#404040', width: "100%", height: "100%"}}>
        <StatusBar translucent barStyle='light-content' />
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
        <MainPage />
        </ScrollView>
      </SafeAreaView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
