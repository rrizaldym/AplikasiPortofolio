// import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Pressable,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'

export default Welcome = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={{
          padding:10,
          size:10,
          flex:1
          // position:'absolute',
        }} >
          <Image source={require('../component/LogoShapes.png')}
            style={{width:25, height:30}}
          />
        </View>

        <View style={{
          flex:10,
          justifyContent:'center',
          alignItems:'center',
          }} >
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang FITUR halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
             <Text>Penjelasan tentang halaman awal</Text>
        </View>

        <View style={styles.posisition} >
            <View style={styles.ButtonPosisition} >
              <Pressable 
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}
                // onLongPress={()=>alert('onLongPress')} 
                // onPressIn={()=>alert('onPressIn')}
                // // onPressOut={}
                // android_disableSound={true}
              >
                <Text style={{ color:'white'}} >Log In</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Register')}
                style={styles.registerButton}
              >
                <Text style={{ color:'white'}} >Register</Text>
              </Pressable>
            </View>
            <Text style={styles.Agreement} >By logging in or registering,{`\n`}you agree to our <Text style={{color:'#138DF3'}} onPress={()=> alert('Terms of Service')} >Terms of Service</Text> and <Text style={{color:'#138DF3'}} onPress={()=> alert('Privacy Policy')} >Privacy Policy</Text>.</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
    // alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  posisition:{
    // position:'absolute',
    bottom:0,
    alignSelf:'center',
    padding:10,
    flex:2
    // paddingVertical:10
  },
  loginButton:{
    backgroundColor:'#FA3147',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    width:120,
    height:35,

  },
  registerButton:{
    backgroundColor:'#B13666',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    width:120,
    height:35,

  },
  ButtonPosisition:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10,
    // alignItems:'center',
  },
  Agreement:{
    textAlign:'center',
    // fontWeight:'bold'
    // fontSize:11
  }
});
