import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const FollowRecipeScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Recipe Steps</Text>
    </View>
  );
};

export default FollowRecipeScreen;
