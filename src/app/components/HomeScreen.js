import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="Cookbook"
        onPress={() => navigation.navigate('CookbookScreen')}
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

export default HomeScreen;
