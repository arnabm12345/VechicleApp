import AuthContent from '../Components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState,useContext } from 'react';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

const authCtx=useContext(AuthContext);

 async function signUpHandler({email,password}){
  setIsAuthenticating(true);
  try{
 const token= await createUser(email, password);
  authCtx.authenticate(token);
  }
  catch(error){
    Alert.alert('Authentication failed','could not create New user . Please try again later');
    setIsAuthenticating(false);
  }
 
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user please wait..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;