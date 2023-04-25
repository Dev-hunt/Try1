// In App.js in a new project
import React,{useState,useEffect} from "react";

// import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Addedapp from './src/components/AddedApps';
import Todolist from './src/components/Todolist';
import Analytics from './src/components/Analytics';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';



const Stack = createNativeStackNavigator();

function App() {

  let [fontsLoaded] =useFonts({
    'RubikPixels-Regular':require("./assets/Fonts/RubikPixels-Regular.ttf") ,
    'AbrilFatface-Regular':require("./assets/Fonts/AbrilFatface-Regular.ttf"),
    "Montserrat": require('./assets/Fonts/Montserrat.ttf'),
    "Inter-Bold": require("./assets/Fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/Fonts/Inter/static/Inter-Regular.ttf"),
})

useEffect(()=>
{
    async function prepare()
    {
        await SplashScreen.preventAutoHideAsync();
    }
    prepare();
},[]);

if(!fontsLoaded)
{   
    return undefined;
}
else
{
    SplashScreen.hideAsync();
}


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home " component={Home}  />    
        <Stack.Screen name="Dashboard" component={Dashboard}/>   
        <Stack.Screen name='Addedapp' component={Addedapp} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />

        <Stack.Screen name='Todolist' component={Todolist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
