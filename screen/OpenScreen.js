import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text,Button,StatusBar } from 'react-native';
import Colors from '../constants/color';
import PrimaryButton from '../Components/ui/PrimaryButton';

function OpenScreen({props}){

    return (
          <View style={styles.container}>
             <Text style={styles.title}>Vechicle Breakdown App</Text> 
           <View style={styles.image}>
          <Image source={require('../assets/220-2203211_home-car-breakdown-logo.png')} style={styles.logo} />
          </View>
          <View style={styles.button}>
          <PrimaryButton onPress={props}>Let`s Go</PrimaryButton>
          </View>
          <StatusBar style="auto" />
        </View>
      );
}
export default OpenScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: Colors.accent500,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 50,
      paddingTop:10,
      borderRadius:70,
      justifyContent:'center',
      backfaceVisibility:'hidden',
    },
    title: {
      fontSize: 22,
      borderBottomWidth :3,
      borderBottomColor: '#000',
      fontWeight: 'bold',
      color: Colors.primary500,
      marginTop:70,
    },
    image:{
      marginTop:150,
    },
    button:{
      paddingTop:50,
    }
});
