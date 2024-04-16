/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { View, Text } from 'react-native'
import React from 'react'
import store from './src/redux/Store';
import { Appbar, DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import { Provider } from 'react-redux';


AppRegistry.registerComponent(appName, () => App);
