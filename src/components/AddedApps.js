import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const AddedApps = () => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 7 }}>
                <Text style={styles.txt}>Total Remaining Time:  45 mins</Text>
            </View>
            <View style={[styles.img_container,{ flex: 1,alignItems:"flex-end" }]}>
                <TouchableOpacity>
                <Image source={require("../../assets/icons/plus.png")} style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default AddedApps;

const styles = StyleSheet.create({
    img_container:
    {
        marginRight:"2%",
    },
    container:
    {
        margin: 12,
        flex: 1,
        // backgroundColor: "red",
    },
    txt:
    {
        fontFamily: "Inter-Bold",
        fontSize: 18,
    },
    img:
    {
        width: 60,
        height: 60,
        // alignSelf:"center",
        // marginTop:"100%"
        // justifyContent:"flex-end"
    }
})