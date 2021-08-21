import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const CookbookScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CookbookScreen;
