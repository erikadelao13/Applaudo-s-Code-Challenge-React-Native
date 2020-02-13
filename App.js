/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from 'native-base';
import {store, persistor} from './store';
import './src/utils/networking';

import Splash from './src/screens/splash';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <Splash />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}