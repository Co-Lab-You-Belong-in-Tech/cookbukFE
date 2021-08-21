import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';

const CookbookScreen = ({navigation}) => {
  const [recipes, setRecipes] = useState([
    {
      title: 'picadillo',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '1',
    },
    {
      title: 'black eyed peas & turkey necks',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '2',
    },
    {
      title: 'peri peri chicken',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '3',
    },
    {
      title: 'camarones a la criolla',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '4',
    },
    {
      title: 'oxtail stew',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '5',
    },
    {
      title: 'cuban black beans',
      servings: 4,
      ingredients: [{amount: '1 dum', ingredient: 'dummy ingredient'}],
      methods: ['dummy method'],
      materials: ['dummy material'],
      favorite: true,
      recipeImg: 'dummyImgURL',
      recipeId: '6',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>My Cookbook</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.recipeId}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RecipeScreen', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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

export default CookbookScreen;
