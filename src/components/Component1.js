import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Component1=(props)=> {
  return (
    <View style={{height:"100%",width:"100%",backgroundColor:"white"}}>
      <View style={[styles.uppr,{flex:1}]}>
        <Text style={styles.head}>{props.textData}</Text>
      </View>
      <View style={{flex:4.12}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    uppr:
    {
        width: "100%",
        backgroundColor:"#144E76",
        borderBottomLeftRadius:85,  
    },
    sec:
    {
        width: "100%",
        backgroundColor:"#144E76",
    },
    end:
    {
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderTopEndRadius:100,
        position:"absolute",
    },
    head:
    {
        fontSize:27,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:"4.5%",
        color:"white"
    }

})
export default Component1;