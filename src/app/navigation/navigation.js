import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AddRecipeScreen from '../components/AddRecipeScreen';
import CookbookScreen from '../components/CookbookScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Welcome to Cookbük'}}
      />
      <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
      <Stack.Screen name="CookbookScreen" component={CookbookScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
