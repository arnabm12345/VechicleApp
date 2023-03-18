import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import WelcomeScreen from './WelcomeScreen';
import Colors from '../constants/color';
import AuthContextProvider from '../store/auth-context';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
   <AuthContextProvider>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </AuthContextProvider>
  );
}

export default function FirstScreen() {
  return (
    <>
      <StatusBar style="light" />

      <Navigation />
    </>
  );
}