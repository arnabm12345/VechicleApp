import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const ContactUsScreen = () => {

  const email = 'support@yourapp.com';
  const phone = '555-123-4567';
  const website = 'https://yourapp.com';

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
    <View style={styles.container}>
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
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactUsScreen;
