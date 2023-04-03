import { StyleSheet,Button, Text, View, ImageBackground, Image,StatusBar,TouchableOpacity} from 'react-native'
import React from 'react'


const Home =({navigation})=>{
  return (
    // <View>
    //   <ImageBackground source={require("../asstes/Background.jpg")} style={{height:'100%',width:'100%'}}>
    //     <View style={styles.container}>
    //     <View style={{ alignSelf:"center",marginTop:70}}>
    //       <Text style={[styles.head]}>DigiDost</Text>
    //     </View>
    //       <Image source={require("../asstes/Backk.png")} style={[styles.stretch,{marginTop:70,alignSelf:"center"}]} />
    
    //       <Text style={[styles.titleText,{marginTop:35,alignSelf:"center"}]}>"Your Digital Friend"</Text>
    //       <StatusBar style="auto"/>
    //       <Button title="Get Started" onPress={() => navigation.navigate('Dashboard')} />
    //       <Button title='Get Started' onPress={()=> navigation.navigate('Dashboard')}/>
    
    //     </View>   
    //   </ImageBackground>
    // </View>
    
    <>
    {/* <ImageBackground source={require("./Background.png")} style={{height:"100%"}}> */}
    <ImageBackground source={require("../asstes/Background.jpg")} style={{height:'100%',width:'100%'}}>
    <View style={styles.container}>
    <View style={{ alignSelf:"center", marginTop:119}}>
      <Text style={[styles.head]} > DigiDost </Text>
      {/* <Text> Karan  </Text> */}
    </View>
        <Image source={require("../asstes/Backk.png")} style={[styles.stretch,{marginTop:70,alignSelf:"center"}]} />
      
      
      <Text style={[styles.titleText,{marginTop:35,alignSelf:"center"}]}>"Your Digital Friend"</Text>
      <StatusBar style="auto" />
    </View>
    <TouchableOpacity 
        onPress={() => navigation.navigate('Dashboard')}
        >
            <Text style={styles.but}>Get Started</Text>
        </TouchableOpacity>
    </ImageBackground>
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#4CC8D9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  stretch: {
    width: 363,
    height: 238,
    // resizeMode: 'stretch',
  },
  baseText: {
    // fontFamily: 'Cochin',
  },
  titleText: {
    // fontFamily: 'Cochin',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#110D59',
  },

  head: {
    fontSize: 64,
    color: '#110D59',
    // fontFamily: "Abril Fatface"
    // flex: 1,
    // backgroundColor: '#4CC8D9',
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },
  but:
  {
      color:"white",
      textAlign:"center",
      marginVertical:22,
      backgroundColor:"#181277",
      padding:9,
      paddingLeft:39,
      paddingRight:39,
      alignSelf:"center",
      elevation: 8,
      borderRadius: 32,
      fontSize:34

  },
});


export default Home;