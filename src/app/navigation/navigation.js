import React, {useContext} from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AddRecipeScreen from '../components/AddRecipeScreen';
import CookbookScreen from '../components/CookbookScreen';
import UserContext from '../../UserContext';

function LogoTitle() {
  const userC = useContext(UserContext);
  return (
    (userC?.user ? <Image
      style={{ width: 40, height: 40, borderRadius: 50, margin: 10 }}
      source={{uri: userC?.user?.picture}}
    /> : <></>)
  );
}

const Stack = createStackNavigator();

const Navigator = (props) => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HomeScreen"
        options={{ headerRight: (props) => <LogoTitle {...props} /> }}
      >
        {props => <HomeScreen {...props} />}
        </Stack.Screen>
      <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
      <Stack.Screen name="CookbookScreen" component={CookbookScreen} />
      {/* <Button title="Cognito" onPress={hostedUISignIn} /> */}
    </Stack.Navigator>
  );
};

export default Navigator;
