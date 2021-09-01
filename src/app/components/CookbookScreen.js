import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';

import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import AddRecipeFormScreen from './AddRecipeFormScreen';

const CookbookScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiName = 'fetchRecipes';
      const path = '/';
      const response = await API.get(apiName, path);
      console.log(response);
      setRecipes(response);
    };
    fetchRecipes().catch(console.log);
  }, [navigation, modalOpen]);
  // useEffect(() => {
  //   console.log(recipes);
  // }, [recipes]);

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={modalOpen}>
          <AddRecipeFormScreen setModalOpen={setModalOpen} />
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
              <Text style={globalStyles.titleText}>{item.recipeTitle}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="AddRecipe" onPress={() => setModalOpen(true)} />
    </View>
  );
};

export default CookbookScreen;
