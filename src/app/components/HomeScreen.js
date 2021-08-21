import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const HomeScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="Cookbook"
        onPress={() => navigation.navigate('CookbookScreen')}
      />
    </View>
  );
};

export default HomeScreen;
