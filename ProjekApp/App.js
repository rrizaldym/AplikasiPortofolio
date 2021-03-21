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
// import Welcome2 from './stack/Welcome2'

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Register' >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Welcome2' component={Welcome2} options={{ headerShown: false }} /> */}
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
            {/* <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Profile' component={Profile} /> */}
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
