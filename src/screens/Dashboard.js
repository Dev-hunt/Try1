import { StyleSheet, Text,Button, View } from 'react-native'
import React from 'react'

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text>Hello my nam is karan </Text>
      <Button title='Todo' onPress={()=> navigation.navigate('Todolist')}/>
      <Button title='Addedapp' onPress={()=> navigation.navigate('Addedapp')}/>
      <Button title='Analytics' onPress={()=> navigation.navigate('Analytics')}/>


    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})