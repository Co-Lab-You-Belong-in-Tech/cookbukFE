import 'react-native-gesture-handler';
import React from 'react';
import { Button, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/app/navigation/navigation';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { withOAuth } from "aws-amplify-react-native";
import awsconfig from './src/aws-exports';
import UserContext from './src/UserContext';

// additional configurations
const oauth = {
  scope: ['email', 'profile', 'openid'],
  redirectSignIn: 'cookbukFE://',
  redirectSignOut: 'cookbukFE://something',
  responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
}
awsconfig.oauth = {
  ...awsconfig.oauth,
  ...oauth
}

Amplify.configure(awsconfig);

const App = (props) => {
  const {
    oAuthUser,
    oAuthError,
    hostedUISignIn,
    signOut,
  } = props;
  return (
    // <View>
    //     <Text>User: {oAuthUser ? JSON.stringify(oAuthUser.attributes) : 'None'}</Text>
    //     {oAuthUser ? (
    //         <Button title="Sign Out" onPress={signOut} />
    //     ) : (
    //         <>
    //             {/* Go to the Cognito Hosted UI */}
    //             <Button title="Cognito" onPress={hostedUISignIn} />
    //         </>
    //     )}
    // </View>

    <UserContext.Provider value={{user: oAuthUser?.signInUserSession?.idToken?.payload, 
                                  signOut, 
                                  signIn: hostedUISignIn}}>
      <NavigationContainer>
        <Navigator {...props}/>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default withOAuth(App);
