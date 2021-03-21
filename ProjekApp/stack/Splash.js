// import { StatusBar } from 'expo-status-bar';
// import { render } from 'react-dom';
// import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default Splash = ({navigation}) => {
        useEffect(() => {
            setTimeout(()=>{
                navigation.replace('Welcome')
            }, 3000)
        }, [])

        return (
          <SafeAreaView style={styles.container}>
            <Image source={require('../component/LogoShapes.png')}/>
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
