import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const CookbookScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>My Cookbook</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="AddRecipe"
        onPress={() => navigation.navigate('AddRecipeFormScreen')}
      />
      <Button
        title="Recipe"
        onPress={() => navigation.navigate('RecipeScreen')}
      />
    </View>
  );
};

export default CookbookScreen;
