import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {FlatList} from 'react-native-gesture-handler';

const RecipeScreen = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.servings}</Text>
      <FlatList
        data={route.params.ingredients}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={route.params.methods}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="GetStarted"
        onPress={() => navigation.navigate('FollowRecipeScreen')}
      />
    </View>
  );
};

export default RecipeScreen;
