import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import Colors from '../constants/color';
const EmergencyContactsScreen = () => {

  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '100'
    },
    {
      name: 'Ambulance',
      number: '102'
    },
    {
      name: 'Family Member',
      number: '555-123-4567'
    }
  ];

  const handleCall = (number) => {
    // Use the `react-native-phone-call` library to make a phone call
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.authContent}>
      <Text style={styles.header}>Emergency Contacts</Text>
      {emergencyContacts.map(contact => (
        <TouchableOpacity
          key={contact.name}
          style={styles.contactButton}
          onPress={() => handleCall(contact.number)}
        >
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactNumber}>{contact.number}</Text>
        </TouchableOpacity>
      ))}
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
  contactButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    alignSelf:'center',
    backgroundColor: Colors.primary500
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:Colors.accent500
  },
  contactNumber: {
    fontSize: 14,
    color:Colors.error100
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

export default EmergencyContactsScreen;
