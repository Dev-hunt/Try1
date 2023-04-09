import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import AddedApps from './AddedApps';
import Analytics from './Analytics';
import Todolist from './Todolist';
// import { TouchableOpacity } from 'react-native-web';

const Component1=()=> {


  let onSelection=(val)=>
  {
    key=val;
    console.log(key);

  }
  const [selected, setSelected] = useState(1);
  // if (key==2)
  // {
  //   // setIsSelected=2
  // }



  return (
    <View style={{height:"100%",width:"100%",backgroundColor:"white"}}>
      <View style={[styles.uppr,{flex:1}]}>
      <View style={{flex:.85,flexDirection:"row"}}>
      <TouchableOpacity style={{marginTop:"5%",marginLeft:"4%"}}>

      <Image source={require("../../assets/icons/Menu(White).png")} style={{height:25,width:25}}/>

      </TouchableOpacity>
        <Text style={styles.head}>DigiDost</Text>
        <TouchableOpacity style={styles.head_small}>
        <Text style={[styles.head_small,{marginLeft:0}]}>Pro</Text>
        {/* <Text style={styles.head_small}>Pro</Text> */}
        </TouchableOpacity>
        {/* <Text style={styles.head_small}>Pro</Text> */}
      </View>
      <View style={{flex:1,flexDirection:"row"}}>
      <View style={styles.smallBox}>
      {/* <Image source={require("../../assets/icons/Menu(White).png")} style={{height:"100%",width:"100%"}}/> */}
        {/* <Text style={[styles.allthree]}>Added Apps</Text> */}
        <TouchableOpacity style={styles.allthreeTouch}
        onPress={()=>
        {
         
          setSelected(1);
        }}>
        <Text style={selected==1? [styles.allthree,styles.selected ]: styles.allthree}>Added Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allthreeTouch}
        onPress={()=>
        {
        
          setSelected(2);
          // props.navigation.navigate.("Component_Analytics");
        }}>
        <Text style={selected==2? [styles.allthree,styles.selected ]: styles.allthree}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allthreeTouch}
        onPress={()=>
        {
          
          setSelected(3);
        }}>
        <Text style={selected==3? [styles.allthree,styles.selected ]: styles.allthree}>ToDo</Text>
        </TouchableOpacity>
        {/* <Text style={styles.head_small}>Pro</Text> */}
        </View>
      </View>
      </View>
      <View style={[{flex:4.12}]}>
      {/* <View > */}
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}>
      {/* <Temporary/> */}
      {/* {console.log("hello")} */}

      {/* Redirect to screens from Here */}
        {selected==1?<AddedApps/>:""}
        {selected==2?<Analytics/>:""}
        {selected==3?<Todolist/>:""}
        {/* <View style={styles.secondHalf}> */}
          {/* <Text>Hello</Text> */}
          
        {/* </View> */}
      </View>
      {/* </View> */}
      {/* <Temporary/> */}
          {/* <BoxModel/> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    uppr:
    {
        width: "100%",
        backgroundColor:"#144E76",
        borderBottomLeftRadius:75,  
    },
    sec:
    {
        width: "100%",
        backgroundColor:"#144E76",
        // position:"relative",
    },
    end:
    {
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        // backgroundColor:"cyan",
        borderTopEndRadius:90,
        position:"absolute",
        // justifyContent:"center",
    },
    head:
    {
        fontSize:27,
        // fontWeight:"bold",
        textAlign:"center",
        marginTop:"2.5%",
        color:"white",
        fontFamily:"Inter-Bold",
        marginLeft:"22.5%",
        // alignSelf:"center"
        
    },
    head_small:
    {
        fontSize:16,
        // fontWeight:"bold",
        textAlign:"center",
        // marginVertical:"7.5%",
        marginTop :"5.5%",
        marginLeft:"20%",
        color:"white",
        fontFamily:"Inter-Bold",
        // alignSelf:"flex-end"
        // justifyContent:"center"
        // marginEnd
        
    },
    smallBox:
    {
      backgroundColor:"#0C2D44",
      height:"80%",
      width:"83%",
      marginHorizontal:"10%",
      borderRadius:20,
      flexDirection:"row",
      justifyContent:"space-evenly",
      // paddingLeft:"2.5%"
      // alignSelf:"center",
      // marginLeft:"23%"
    },
    allthreeTouch:
    {
      justifyContent:"center"
    },

    allthree:
    {
      fontFamily:"Inter-Bold",
      fontSize:16,
      color:"white",
      textAlign:"center",
      textAlignVertical:"center",
      // marginLeft:"2.5%"
      // margin:"2%",
      // marginTop:"6.5%"
    },
    selected:
    {
      backgroundColor:"#144E76",
      borderRadius:10  ,
      height:"70%",
      alignSelf:"center",
      padding:8,
      marginLeft:"1.25%",
      fontSize:18,
    },
    secondHalf:
    {
      // backgroundColor:"red",
      height:"100%",
      width:"100%",
      justifyContent:"center",
      alignSelf:"center",
      alignItems:"center",
      borderTopRightRadius:90,
      
      // position:"absolute",
      // padding:20,
    }

})
export default Component1;