import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const VehicleInfoScreen = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handlePress = () => {
    // Handle the submission of the vehicle information
    console.log(make, model, year, licensePlate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Make"
        value={make}
        onChangeText={setMake}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={styles.input}
        placeholder="License Plate"
        value={licensePlate}
        onChangeText={setLicensePlate}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 48,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default VehicleInfoScreen;
