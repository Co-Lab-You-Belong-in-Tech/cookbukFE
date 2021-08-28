import React, {useContext, useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import UserContext from '../../UserContext';
import Amplify, { Auth, Hub } from 'aws-amplify';
import {globalStyles} from '../styles/global';


const HomeScreen = ({navigation, hostedUISignIn}) => {
  
  const userContext = useContext(UserContext);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      {userContext?.user ? (
            <Button title="Sign Out" onPress={userContext.signOut} />
        ) : (
            <>
                {/* Go to the Cognito Hosted UI */}
                <Button title="Sign in" onPress={userContext.signIn} >Login</Button>
            </>
        )}
      <Button
        title="Cookbook"
        onPress={() => navigation.navigate('CookbookScreen')}
      />
    </View>
  );
};

export default HomeScreen;
