import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

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

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen}>
        <View style={styles.modalContent}>
          <Text style={globalStyles.paragragh}>Hello!</Text>
        </View>
        <Button
          title="Enter Recipe for Review"
          onPress={() => setModalOpen(false)}
        />
      </Modal>
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
