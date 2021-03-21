import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

export default class Register extends React.Component {
  render(){
        return (
          <SafeAreaView style={styles.container} >
            <View style={{
              flex:1,
              justifyContent:'space-around',
              }} >
              <AntDesign
                name='arrowleft'
                size={24}
                color='black'
                onPress={()=>
                  alert('todo')
                  // navigation.navigate('Welcome')
                }
              />
              <View>
                <Text style={styles.register} >Register</Text>
                <Text>Please fill in a few details below</Text>
              </View>
            </View>

            <View style={styles.textBody} >
              <View style={{paddingVertical:11}} >
                <Text>Name <Text style={{color:'red'}} >*</Text> </Text> 
                <TextInput 
                  placeholder='e.g. your name'
                  style={styles.textInput}
                />
              </View>

              <View style={{paddingVertical:11}}>
                <Text>Email <Text style={{color:'red'}} >*</Text> </Text> 
                <TextInput 
                  placeholder='name@mail.com'
                  style={styles.textInput}
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                />
              </View>

              <View style={{paddingVertical:11}} >
                <Text>Phone Number <Text style={{color:'red'}} >*</Text> </Text> 
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    paddingVertical:10
                  }} >
                  <Button
                    title='  +62'
                    titleStyle={{
                      fontSize:10,
                      color:'black',
                      
                    }}
                    buttonStyle={{
                      borderRadius:50,
                      height:25,
                      width:50,
                      backgroundColor:'#C4C4C4',
                    }}
                    icon={
                      // <Flag
                      //   id='id'
                      //   size={15}
                      // />
                      <Icon
                        name='flag'
                        size={15}
                      />
                    }
                    onPress={()=>alert('oke')}
                  />
                  <TextInput 
                    placeholder='8 . . .'
                    style={styles.textInput2}
                    keyboardType='numeric'
                    maxLength={11}
                    dataDetectorTypes='phoneNumber'
                    // onKeyPress={(text)=>{
                    //   if{text[0]===8}{

                    //   }
                    // }}
                  />
                </View>
              </View>
            </View>

            <View style={{flex:2}}>
              <KeyboardAvoidingView style={styles.buttonRegister} >
                <Button buttonStyle={{
                        height:50,
                        width:50,
                        borderRadius:100,
                        backgroundColor:'#C4C4C4'
                      }}
                      icon={
                        <AntDesign
                          name='arrowright'
                          size={40}
                          color='white'
                        />
                      }
                      onPress={()=>alert('oke')}
                  />
              </KeyboardAvoidingView>

            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop:20,
    justifyContent:'center',
    alignSelf:'center',
  },
  register:{
    fontSize:20,
    fontWeight:'bold'
  },
  textBody:{
    flex:1,
    // justifyContent:'center',
  },
  textInput:{
    // padding:5,
    width:330,
    borderWidth:0.5,
    borderColor:'transparent',
    borderBottomColor:'#000000'
  },
  textInput2:{
    paddingHorizontal:5,
    width:270,
    borderWidth:0.5,
    borderColor:'transparent',
    borderBottomColor:'#000000'
  },
  buttonRegister:{
    position:'absolute',
    right:0,
    bottom:0,
    padding:10
    // alignItems:'flex-end',
    // justifyContent:'flex-end'
    // paddingTop:200,
    // marginTop:200,
  },
});
