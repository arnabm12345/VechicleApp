import AuthContent from '../Components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState } from 'react';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

 async function signUpHandler({email,password}){
  setIsAuthenticating(true);
  await createUser(email, password);
  setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user please wait..." />;
  }
  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;