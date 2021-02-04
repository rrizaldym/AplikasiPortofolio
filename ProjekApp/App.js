import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'


import Detail from './stack/Detail'
import Home from './stack/Home'
import Login from './stack/Login'
import Profile from './stack/Profile'
import Register from './stack/Register'
import Splash from './stack/Splash'
import Welcome from './stack/Welcome'

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash' >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
            {/* <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Splash' component={Splash} /> */}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
