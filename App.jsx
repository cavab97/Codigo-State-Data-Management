import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import {useColorScheme} from 'react-native';

import Main from './App/main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Main />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
