/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './components/Counter.tsx';
import {store} from './redux/store.tsx';

const Router = () => {
  return (
      <Provider store={store}>
          <SafeAreaView>
              <Counter />
          </SafeAreaView>
      </Provider>
  );
};

export default Router;
