import { StyleSheet, Text, View } from 'react-native';
import ProfileSection from './ProfileSection';
function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
        <Text style={styles.titel}>Welcome!</Text>
      <Text style={styles.titlel}>You authenticated successfully!</Text>
      <ProfileSection/>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  titlel: {
    //fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 50,
  },
  titel:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:10
  }

});