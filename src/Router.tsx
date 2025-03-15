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
import MealPlannerScreen from './pages/MealPlanner';
import ReminderScreen from './pages/Reminder';
import DietReportScreen from './pages/DietReport';

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
                    <Stack.Screen name="Login" component={Login} options={{
                        title: 'Giriş Yap',
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Register" component={Register} options={{
                        title: 'Kayıt Ol',
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Home" component={HomePages} options={{
                        title: 'Ana Sayfa',
                        headerShown: false,
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

function HomePages() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MealPlanner" component={MealPlannerScreen} />
            <Stack.Screen name="Reminder" component={ReminderScreen} />
            <Stack.Screen name="DietReport" component={DietReportScreen} />
        </Stack.Navigator>
    );
}


export default Router;
