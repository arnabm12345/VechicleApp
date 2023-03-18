import React from 'react';
import { useState } from 'react';
//import * as React from 'react';
import { StyleSheet, View, Image, Text,Button,StatusBar } from 'react-native';
import Colors from './constants/color';
import PrimaryButton from './Components/ui/PrimaryButton';
import Title from './Components/ui/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import WelcomeScreen from './screen/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [ClickState,setClickState] =useState(false);
  function clickHandeler(){
      setClickState(true);
  }
  if(ClickState==true){
      return(
      <LoginScreen/>
      );
  }
  return (
    <>
     <StatusBar style="auto" />
      <WelcomeScreen props={clickHandeler}/>
    </>
    
  );
}
