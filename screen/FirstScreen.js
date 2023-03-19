import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../store/auth-context';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import WelcomeScreen from './WelcomeScreen';
import Colors from '../constants/color';
import AuthContextProvider from '../store/auth-context';
import { useContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AppLoading from 'expo-app-loading';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
//import { IconContext } from 'react-icons';
//import { IconButton } from '@material-ui/core';
import IconButton from '../Components/ui/IconButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VehicleInfoScreen from './VehicleInfoScreen';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

//Function to create drawer navigator
function DrawerNavigator() {
    const authCtx=useContext(AuthContext);

    return (
      <Drawer.Navigator
        initialRouteName='welcome'
        screenOptions={{
         // headerStyle: { backgroundColor: '#351401' },
         headerStyle: { backgroundColor: '#72063c' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f9beda',
          drawerActiveTintColor: '#3c0a6b',
          //sceneContainerStyle: { backgroundColor: '#3f2f25' },
          sceneContainerStyle: { backgroundColor: '#f9beda' },
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }
    }
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Profile',
          }}
        />
        <Drawer.Screen name="Vechicle Info" component={VehicleInfoScreen} />
      </Drawer.Navigator>
    );

 }

 

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
      <Stack.Screen name="Welcome "
        component={DrawerNavigator}
        options={{
         /* headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),*/
          headerShown: false
        }} 
        />
    </Stack.Navigator>
  );
}

function Navigation() {
    const authCtx =useContext(AuthContext);
  return (
  
    <NavigationContainer>
       {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
  
    const authCtx = useContext(AuthContext);
  
    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('token');
  
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
  
        setIsTryingLogin(false);
      }
  
      fetchToken();
    }, []);
  
    if (isTryingLogin) {
      return  <LoadingOverlay message="Logging you in..." />;
    }
  
    return <Navigation />;
  }
  

export default function FirstScreen() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
      <Root />
      </AuthContextProvider>
    </>
  );
}