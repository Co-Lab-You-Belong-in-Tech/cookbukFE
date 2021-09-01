import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {FlatList} from 'react-native-gesture-handler';

const RecipeScreen = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
      {console.log(route.params.ingredients)}
      <Text style={globalStyles.titleText}>{route.params.recipeTitle}</Text>
      <Text style={globalStyles.titleText}>{route.params.servings}</Text>
      <FlatList
        data={route.params.ingredients.split(', ')}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={route.params.methods.split(', ')}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="GetStarted"
        onPress={() =>
          navigation.navigate('FollowRecipeScreen', route.params.methods)
        }
      />
    </View>
  );
};

export default RecipeScreen;
