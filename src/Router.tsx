/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap' }} />
                    <Stack.Screen name="Register" component={Register} options={{ title: 'Kayıt Ol' }} />
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Ana Sayfa' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default Router;
