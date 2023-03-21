import Input from './Input';
import { Alert, View, StyleSheet } from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { useState } from 'react';
import  Colors from '../../constants/color'
import OutlinedButton from '../ui/OutlinedButton';
import Button from '../ui/Button';

function MechanicRegistrationForm({ submitButtonLabel, onSubmit }) {

  const [inputValues, setInputValues] = useState({
    name: '',
    number: '',
    email: '',
  });

  const [pickedLocation, setPickedLocation] = useState(null);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }


  function SubmitHandeler() {
    const mechanicData = {
        name: inputValues.name,
        number: +inputValues.number,
        email: inputValues.email,
        lat:+pickedLocation.lat,
        lng:+pickedLocation.lng,
      };
      onSubmit(mechanicData);
      Alert.alert('Successfull','The form is successfully Submitted');
      setInputValues({name:'',number:'',email:''});
      setPickedLocation(null);
      console.log(mechanicData);

  }


  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      Alert.alert('Successfull!',
      'You have successfully added location');
  }

  return (
    <View>
      <Input
        label="Name"
        textInputConfig={{
         // keyboardType: 'decimal-pad',
         onChangeText: inputChangedHandler.bind(this, 'name'),
         autoCorrect: false ,
         value: inputValues.name,
          
        }}
      />
      <Input
        label="number"
        textInputConfig={{
          maxLength: 10,
          autoCorrect: false ,
          onChangeText: inputChangedHandler.bind(this, 'number'),
          value: inputValues.number,
        }}
      />
      <Input
        label="email"
        textInputConfig={{
         // multiline: true,
          // autoCapitalize: 'none'
           autoCorrect: false ,// default is true
           onChangeText: inputChangedHandler.bind(this, 'email'),
           value: inputValues.email,
        }}
      />

    <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
      </View>
      <View style={styles.btn}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={SubmitHandeler}>
          {submitButtonLabel}
        </Button>
      </View>
      </View>
    </View>
  );
}

export default MechanicRegistrationForm;

const styles = StyleSheet.create({
    mapPreview: {
      width: '100%',
      height: 200,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      color:'#FFFFFF',
      
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      button: {
        minWidth: 120,
        marginHorizontal: 8,
        color: '#FFFFFF',
      },
      btn:{
        marginTop:20,
        
      }
  });