import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const AddRecipeFormScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Add Recipe Here</Text>
    </View>
  );
};

export default AddRecipeFormScreen;
