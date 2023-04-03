// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Addedapp from './src/components/Addedapp';
import Todolist from './src/components/Todolist';
import Analytics from './src/components/Analytics';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home " component={Home}  />    
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Addedapp' component={Addedapp} />
        <Stack.Screen name='Analytics' component={Analytics} />

        <Stack.Screen name='Todolist' component={Todolist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;