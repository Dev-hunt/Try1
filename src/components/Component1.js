import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Component1=()=> {
  return (
    <View style={styles.container}>
      <View style={[styles.uppr,{flex:1}]}></View>
      <View style={{flex:6}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        height:"100%",
        width:"100%",
        backgroundColor:"white"
    },

    uppr:
    {
        width: "100%",
        backgroundColor:"#144E76",
        borderBottomLeftRadius:70,
        
    
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
        borderTopEndRadius:70,
        position:"absolute",

    }

})
export default Component1;