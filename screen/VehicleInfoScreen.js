import React, { useState } from 'react';
import { View, TextInput,  StyleSheet } from 'react-native';
import FlatButton from '../Components/ui/FlatButton';
import Button from '../Components/ui/Button';
import Colors from '../constants/color';

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
    <View >
    <View style={styles.authContent}>
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
        <Button onPress={handlePress} >Submit</Button>

      </View>
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
    backgroundColor:'#f9beda'
  },
  buttonContainer: {
    marginTop: 16,
    //alignSelf: 'center',
    
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

export default VehicleInfoScreen;
