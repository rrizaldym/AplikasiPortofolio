import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// const TermsofService = () => {
//     return(
//     <TouchableOpacity>
//         <Text>Terms of Service</Text>
//     </TouchableOpacity>
//     )
// }

export default Welcome = ({navigation}) => {
    
  return (
    <SafeAreaView style={styles.container}>
        {/* <View>
            
        </View> */}

        <View style={styles.posisition} >
            <View style={styles.ButtonPosisition} >
                <Button 
                    title='Log in'
                    type='outline'
                    onPress={() => navigation.navigate('Login')} 
                    // icon={
                    //     <Icon 
                    //         name="arrow-right"
                    //         size={15}
                    //         color="#FA3147"
                    //     />
                    // }
                    // iconRight
                />
                <Button 
                    title='Register' 
                    onPress={() => navigation.navigate('Register')} 
                />
            </View>
            <Text style={styles.Agreement} >{`By logging in or registering,\nyou agree to our Terms of Service and Privacy Policy.`}</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  posisition:{
    paddingBottom: 50,
  },
  ButtonPosisition:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    // alignItems:'center',
    padding:10,
  },
  Agreement:{
    // fontWeight:'bold'
    textAlign:'center',
    // fontSize:11
  }
});
