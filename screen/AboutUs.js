import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are a team of passionate mechanics dedicated to providing high-quality automotive services to our customers. With years of experience in the industry, we have built a reputation for excellence and are committed to delivering outstanding results for every job we take on.
      </Text>
      <Text style={styles.description}>
        Our mission is to help you keep your vehicle in top condition so that you can enjoy a safe and smooth ride wherever you go. We offer a range of services, from routine maintenance to major repairs, and use only the best tools and techniques to ensure that your vehicle is always in the best possible hands.
      </Text>
      <Text style={styles.description}>
        Thank you for choosing us as your trusted automotive partner. We look forward to serving you and exceeding your expectations.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
