import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <>
    <ImageBackground source={require("./Background.png")} style={{height:"100%"}}>
    <View style={styles.container}>
    <View style={{ alignSelf:"center", marginTop:119}}>
      <Text style={[styles.head]} > DigiDost </Text>
      <Text> Karan  </Text>
    </View>
      <Image source={require("./Backk.png")} style={[styles.stretch,{marginTop:70,alignSelf:"center"}]} />
      
      <Text style={[styles.titleText,{marginTop:35,alignSelf:"center"}]}>"Your Digital Friend"</Text>
      <StatusBar style="auto" />
    </View>
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
});
