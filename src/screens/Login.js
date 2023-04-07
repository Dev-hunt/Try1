import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Field from '../components/Field';

const Login = ({navigation},{props}) => {
  return (
    <View>
      <Image source={require('../asstes/antiSocial.png')} style={[styles.image,]}/>
      <Text style={[styles.welcometxt]}>Welcome To</Text>
      <Text style={[styles.digidost]}>DigiDost</Text>
      <Field placeholder= "Email / Username" keyboardType={"email-address"}/>
      <Field placeholder="Password" secureTextEntry={true}/>
      <View style={[styles.fp1,]}>
        <Text style={[styles.fp,]}>Forgot Password ?</Text>
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Dashboard')}
        >
            <Text style={styles.but}>  Login  </Text>
      </TouchableOpacity>
      <View style={{display:'flex', flexDirection:'row',justifyContent:"center"}}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
          <Text style={[styles.signup,]}>Signup</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  image:
  {
    height:240,
    width:240,
    alignSelf:"flex-end",
    borderRadius:80,
  },  

  welcometxt:
  {
    fontSize:40,
    fontWeight:"bold",
    color:'#110D59',
    alignSelf:"flex-start",
    paddingHorizontal:"10%"
  },
  digidost:
  {
    fontSize:40,
    fontWeight:"bold",
    color:'#110D59',
    paddingHorizontal:70,
    alignSelf:"flex-start",
  },
  fp1:
  {
    alignItems:"flex-end",
    width:"85%",
    marginBottom:"20%",


  },
  fp:
  {
    fontWeight:"bold",
    color:'#110D59',
  },
  but:
  {
      color:"white",
      textAlign:"center",
      marginVertical:10,
      backgroundColor:"#181277",
      padding:9,
      paddingLeft:44,
      paddingRight:44,
      alignSelf:"center",
      elevation: 8,
      borderRadius: 32,
      fontSize:34,
  },
  signup:
  {
    fontWeight:'bold',
    color:'#110D59',
  }

})
