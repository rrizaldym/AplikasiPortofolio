// import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { 
  StyleSheet, 
  // Text, 
  View, 
  Image,
  Pressable,
} from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view'

import { 
  Container,
   Header,
    Title,
     Content,
      Footer,
       FooterTab,
        Button,
         Left,
          Right,
           Body,
            Icon,
             Text
             } from 'native-base';


export default Welcome = ({navigation}) => {
  
  return (
    <Container>
      <Header transparent>
        <Left>
          <Image source={require('../component/LogoShapes.png')}
            style={{width:25, height:30}}
          />
        </Left>
          <Body>
            <Title style={{color:'blue'}} >Welcome</Title>
          </Body>
        <Right />
      </Header>

      <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:20,
    // alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  posisition:{
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    padding:10,
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
