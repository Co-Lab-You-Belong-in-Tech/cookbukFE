import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const CookbookScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>My Cookbook</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="Add a Recipe"
        onPress={() => navigation.navigate('AddRecipeScreen')}
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

export default CookbookScreen;
