import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const RecipeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Add Recipe</Text>
      <Button
        title="GetStarted"
        onPress={() => navigation.navigate('FollowRecipeScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipeScreen;
