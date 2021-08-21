import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const RecipeScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Add Recipe</Text>
      <Button
        title="GetStarted"
        onPress={() => navigation.navigate('FollowRecipeScreen')}
      />
    </View>
  );
};

export default RecipeScreen;
