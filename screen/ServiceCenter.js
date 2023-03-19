import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import MechanicList from './MechanicList';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const API_KEY = 'AIzaSyCC970UoxpEq2kyaagwIt-DyDPoKbXnBGs';

export default function LocationServices() {
  const navigation = useNavigation();

  const [region, setRegion] = useState(null);
  const [mechanics, setMechanics] = useState([]);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleSearch = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=10000&type=car_repair&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMechanics(data.results);
      navigation.navigate('Mechanic List', { mechanics: data.results });
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };

  
  const handleMarkerPress = (mechanic) => {
    navigation.navigate('MechanicDetails', { mechanic });
  };

  const handleMechanicDetails = (mechanic) => {
    navigation.navigate('MechanicDetails', { mechanic });
  };

  return (
    <View style={styles.container}>
      {region ? (
        <>
          <MapView style={styles.map} region={region}>
            <Marker coordinate={region} />
            {mechanics.map((mechanic) => (
              <Marker
                key={mechanic.place_id}
                coordinate={{
                  latitude: mechanic.geometry.location.lat,
                  longitude: mechanic.geometry.location.lng,
                }}
                title={mechanic.name}
                onPress={() => handleMarkerPress(mechanic)}
              />
            ))}
          </MapView>
          <GooglePlacesAutocomplete
            placeholder='Search for nearby mechanics'
            onPress={handleSearch}
            fetchDetails={true}
            enablePoweredByContainer={false}
            styles={styles.searchBar}
            query={{
              key: API_KEY,
              language: 'en',
              types: 'car_repair',
              location: `${region.latitude},${region.longitude}`,
              radius: 10000,
            }}
          />
         <Button
             title='Search'
          onPress={handleSearch}
           />

        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  searchBar: {
    container: {
      position: 'absolute',
      top: 10,
      width: '90%',
      marginLeft: '5%',
    },
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      marginTop: 10,
      marginBottom: 10,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      color: '#5d5d5d',
      fontSize: 16,
    },
    listView: {
      position: 'absolute',
      top: 105,
    },
  },
});
