import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/2021itb043.jpeg.jpg')} style={styles.image} />
      <Text style={styles.name}>Arnab Mondal</Text>
      <Text style={styles.email}>arnabm12345@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileSection;
