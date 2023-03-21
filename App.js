import React from 'react';
import { useState } from 'react';
//import * as React from 'react';
import { StyleSheet, View, Image, Text,Button,StatusBar } from 'react-native';
import Colors from './constants/color';
import PrimaryButton from './Components/ui/PrimaryButton';
import Title from './Components/ui/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screen/FirstScreen';
import OpenScreen from './screen/OpenScreen';
import DataContextProvider from './store/data-context';
const Stack = createNativeStackNavigator();
export default function App() {
  const [ClickState,setClickState] =useState(false);
  function clickHandeler(){
      setClickState(true);
  }
  if(ClickState==true){
    return(
    <DataContextProvider>  
    <FirstScreen/>
    </DataContextProvider>
  
    );
}
  return (
    <>
     <StatusBar style="auto" />
     <DataContextProvider> 
      <OpenScreen props={clickHandeler} />
      </DataContextProvider>
    </>
    
  );
}
