/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import {Home} from './src'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};
export default App;
