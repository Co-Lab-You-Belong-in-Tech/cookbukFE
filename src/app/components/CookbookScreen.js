import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import AddRecipeFormScreen from './AddRecipeFormScreen';

const CookbookScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
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

  const addRecipe = recipe => {
    recipe.recipeId = Math.random.toString();
    setRecipes(currentRecipes => {
      return [recipe, ...currentRecipes];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={modalOpen}>
          <AddRecipeFormScreen addRecipe={addRecipe} />
          <Button title="Cancel" onPress={() => setModalOpen(false)} />
        </Modal>
      </TouchableWithoutFeedback>

      <Text style={globalStyles.titleText}>My Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.recipeId}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RecipeScreen', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="AddRecipe" onPress={() => setModalOpen(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    alignSelf: 'center',
  },
  modalContent: {
    flex: 1,
  },
});

export default CookbookScreen;
