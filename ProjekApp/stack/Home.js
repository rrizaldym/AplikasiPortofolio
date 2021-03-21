import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Axios from 'axios'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  SafeAreaView, 
  ActivityIndicator, 
  FlatList 
} from 'react-native';


export default class Home extends React.Component{
    constructor(props){
      super(props)
      this.state={
          data : {},
          isLoading:true,
          isError:false
      }
    }

  componentDidMount(){
      this.getTopAnimeList()
  }

  getTopAnimeList = async () => {
      try{
          const response = await Axios.get(`https://api.jikan.moe/v3/top/anime/1/`)
          this.setState({isError: false, isLoading: false, data: response.data})
      } catch (error){
          this.setState({isLoading: false, isError: true})
      }
  }

  render(){
    if (this.state.isLoading){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                flex:1
            }} >
                <ActivityIndicator size='large' color='red' />
            </View>
        )
    }

    else if (this.state.isError){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                flex:1
            }} >
                <Text>Terjadi Error Saat Memuat Data</Text>
            </View>
        )
    }

    return(
        <FlatList
            data={this.state.data.top} //ini harusnya udah bener pake tambah .top
            //atau kalau engga pake .top nanti gimana (?)
            // numColumns={2}
            keyExtractor={({id},index)=> index} //bedanya pake {item}=>item.id
            renderItem={({item})=>
                <View style={styles.viewList} >
                    <View style={{paddingHorizontal :10}} >
                        <Image source={{uri:`${item.image_url}`}} style={styles.Image} />
                    </View>
                    <View>
                        <Text styles={styles.textItemLogin} >{item.title}</Text>
                        <Text styles={styles.textItemUrl} >Type : {item.type}</Text>
                        <Text styles={styles.textItemUrl} >Episodes : {item.episodes}</Text>
                        <Text styles={styles.textItemUrl} >Start Date : {item.start_date}</Text>
                        <Text styles={styles.textItemUrl} >End Date : {item.end_date}</Text>
                        <Text styles={styles.textItemUrl} >Score : {item.score}</Text>
                    </View>

                </View>
            }
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewList:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#DDD',
      alignItems:'center',
    // height:100,
    // justifyContent:'space-evenly'
  },
  Image:{
      width:80,
      height:80,
      borderRadius:40,
      // size:25
  },
  textItemLogin:{
      fontWeight:'bold',
      textTransform:'capitalize',
      marginLeft:20,
      fontSize:16
  },
  textItemUrl:{
      fontWeight:'bold',
      marginLeft:20,
      fontSize:12,
      marginTop:10,
      color:'blue'
  }
});
