import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Login} from './src/Pages/Login'
import {Inicio} from './src/Pages/Inicio'

const Navegacao = createStackNavigator();

//eve.holt@reqres.in
export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator initialRouteName="Inicio">
        <Navegacao.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false
          }}
        />
        <Navegacao.Screen name="Inicio" component={Inicio} />
      </Navegacao.Navigator>
    </NavigationContainer> 
  );
}

