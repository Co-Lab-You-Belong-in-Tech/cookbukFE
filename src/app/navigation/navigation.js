import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AddRecipeFormScreen from '../components/AddRecipeFormScreen';
import CookbookScreen from '../components/CookbookScreen';
import RecipeScreen from '../components/RecipeScreen';
import FollowRecipeScreen from '../components/FollowRecipeScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Welcome to Cookbük'}}
      />
      <Stack.Screen name="CookbookScreen" component={CookbookScreen} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
      <Stack.Screen
        name="AddRecipeFormScreen"
        component={AddRecipeFormScreen}
      />
      <Stack.Screen name="FollowRecipeScreen" component={FollowRecipeScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
