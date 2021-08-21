import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FollowRecipeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Recipe Steps</Text>
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

export default FollowRecipeScreen;
