import AuthContent from '../Components/Auth/AuthContent';
import { useState ,useContext} from 'react';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx=useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try{
    const token=await login(email, password);
     authCtx.authenticate(token);
    }
    catch (error){
     Alert.alert('Authenticaion Failed!','Could not logged in! Please Check your creditional .Or try again Later');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;