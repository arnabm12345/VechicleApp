import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MechanicList({ route }) {
  const { mechanics } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mechanics.name}</Text>
      <Text style={styles.subtitle}>{mechanics.vicinity}</Text>
      <Text style={styles.text}>Rating: {mechanics.rating} / 5</Text>
      <Text style={styles.text}>Total ratings: {mechanics.user_ratings_total}</Text>
      {mechanics.opening_hours && (
        <View style={styles.openingHours}>
          <Text style={styles.text}>Opening hours:</Text>
          {mechanics.opening_hours.weekday_text.map((day, index) => (
            <Text key={index} style={styles.text}>
              {day}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  openingHours: {
    marginTop: 20,
  },
});
