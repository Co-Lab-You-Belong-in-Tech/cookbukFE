import React, {useContext} from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AddRecipeFormScreen from '../components/AddRecipeFormScreen';
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
import RecipeScreen from '../components/RecipeScreen';
import FollowRecipeScreen from '../components/FollowRecipeScreen';

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
      <Stack.Screen
        name="CookbookScreen"
        component={CookbookScreen}
        options={{title: 'My Cookbook'}}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="AddRecipeFormScreen"
        component={AddRecipeFormScreen}
      />
      <Stack.Screen name="FollowRecipeScreen" component={FollowRecipeScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
