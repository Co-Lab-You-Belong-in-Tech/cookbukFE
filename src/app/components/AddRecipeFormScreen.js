import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AddRecipeFormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Add Recipe Here</Text>
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

export default AddRecipeFormScreen;
