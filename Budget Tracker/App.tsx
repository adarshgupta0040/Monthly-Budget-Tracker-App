/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, } from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/Store';
import { Appbar, DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import Main from './src/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

function App({ navigation }: any): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const name: string = "Adarsh";

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#e0c3fc',
      secondary: 'green',
      surface: 'tomato'
    },
  };

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'#e0c3fc'}
          />
          <Main />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
});

export default App;