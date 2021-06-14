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
} from 'react-native';


// Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
// Pages
import {MainPage} from './src/pages/MainPage';


const App = () => {
  
  return (
    <Provider store={store}>
      <SafeAreaView >
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <MainPage />
        </ScrollView>
        {/* <FlatList
          data={[1]}
          renderItem={MainPage}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
