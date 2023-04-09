import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Analytics = () => {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%",textShadowColor:"#B8AFAF",
        textShadowOffset:{width:5,height:5},
        textShadowRadius:8,}}>Screen Time</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 30,marginLeft: "3%",color:"#292DAC"}}>4h 57m</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 16,marginLeft: "3%",color:"#BD1F1F"}}>32 m more than yesterday</Text>


            </View>
            <View style={styles.second}>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 22,marginLeft: "3%",color:"#17A1FA"}}>Added Apps</Text>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 20,marginLeft: "3%"}}>-----------  </Text>
                <Image source={require("../../assets/icons/filter.png")} style={{width:40,height:40}}/>
                {/* <Text>------------</Text> */}
                </View>
                <Text style={{fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%"}}>47m</Text>



            </View>
            <View style={styles.third}>


            </View>
            <View style={styles.fourth}>
            <TouchableOpacity>
                <Text style={{fontFamily: "Inter-Regular",fontSize: 16,marginLeft: "3%",textDecorationLine:"underline"}}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Analytics


const styles = StyleSheet.create({
    img_container:
    {
        marginRight: "2%",
    },
    container:
    {
        margin: 12,
        flex: 1,
        backgroundColor: "#EEEEEE",
        borderRadius: 20,
        borderTopRightRadius: 70,
        // backgroundColor: "red",
    },
    txt_head:
    {
        fontFamily: "Inter-Bold",fontSize: 26,marginLeft: "3%",
    },
    img:
    {
        width: 60,
        height: 60,
        // alignSelf:"center",
        // marginTop:"100%"
        // justifyContent:"flex-end"
    },
    first:
    {
        flex: 4,
        // backgroundColor: "red",
        margin:12,
        
    },
    second:
    {
        flex: 5,
        // backgroundColor: "blue",

    },
    third:
    {
        // backgroundColor: "green",
        flex: 5,

    },
    fourth:
    {
        // backgroundColor: "green",
        flex: 2,
        justifyContent:"center",
        alignItems:"center",
        

    }
})