import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../constants/color';
const ContactUsScreen = () => {

  const email = 'arnabm12345@gmail.com';
  const phone = '8967764647';
  const website = 'https://vechiclebreakdown.com';

  const handleEmail = () => {
    // Use the `Linking` API to open the user's email app
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhone = () => {
    // Use the `Linking` API to make a phone call
    Linking.openURL(`tel:${phone}`);
  };

  const handleWebsite = () => {
    // Use the `Linking` API to open the user's web browser
    Linking.openURL(website);
  };

  return (
    <View style={styles.authContent}>
      <Text style={styles.header}>Contact Us</Text>
      <TouchableOpacity style={styles.button} onPress={handleEmail}>
        <Text style={styles.buttonText}>Email Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePhone}>
        <Text style={styles.buttonText}>Call Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleWebsite}>
        <Text style={styles.buttonText}>Visit Our Website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.error100,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    alignSelf:'center',
    backgroundColor: Colors.primary500
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:Colors.error100,
  },
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
});

export default ContactUsScreen;
