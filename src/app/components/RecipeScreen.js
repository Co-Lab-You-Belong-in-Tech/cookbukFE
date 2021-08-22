import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const RecipeScreen = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Button
        title="GetStarted"
        onPress={() => navigation.navigate('FollowRecipeScreen')}
      />
    </View>
  );
};

export default RecipeScreen;
