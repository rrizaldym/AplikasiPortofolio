import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Splash = ({navigation}) => {
        useEffect(() => {
            setTimeout(()=>{
                navigation.replace('Welcome')
            }, 3000)
        }, [])

        return (
          <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button
                type='clear'
                loading
            />
          </SafeAreaView>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
