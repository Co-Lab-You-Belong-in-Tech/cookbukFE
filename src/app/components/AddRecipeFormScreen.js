/* eslint-disable radix */
import React, {useState, useEffect} from 'react';
import { API } from 'aws-amplify';
import {View, Text, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const recipeSchema = yup.object({
  recipeTitle: yup.string().required().min(4),
  servings: yup
    .string()
    .test('is-num-1-25', 'Serving must be a number', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  ingredients: yup.string().required().min(25),
  methods: yup.string().required().min(25),
});

const AddRecipeFormScreen = ({setModalOpen}) => {
  const [newRecipe, setNewRecipe] = useState(null);

  useEffect(() => {
    if (!newRecipe) return;
    const saveRecipes = async() => { 
      const apiName = 'saveRecipe';
      const path = '/';
      console.log("new recipe" + newRecipe);
      const request = {
        body: newRecipe, 
      };
      const response = await API.post(apiName, path, request);
      console.log(response);  
      if (response.uuid) {
        console.log("Success");
        // setNewRecipe(null);
        setModalOpen(false);
      }
    }
    saveRecipes().catch(console.log);
  }, [newRecipe]);
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{recipeTitle: '', servings: '', ingredients: '', methods: ''}}
        validationSchema={recipeSchema}
        onSubmit={(values, actions) => {
          // actions.resetForm(); clears values when submitted
          setNewRecipe(values);
        }}>
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Recipe Title"
              onChangeText={formikProps.handleChange('recipeTitle')}
              value={formikProps.values.recipeTitle}
              onBlur={formikProps.handleBlur('recipeTitle')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.recipeTitle && formikProps.errors.recipeTitle}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Servings"
              onChangeText={formikProps.handleChange('servings')}
              value={formikProps.values.servings}
              onBlur={formikProps.handleBlur('servings')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.servings && formikProps.errors.servings}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="Ingredients"
              onChangeText={formikProps.handleChange('ingredients')}
              value={formikProps.values.ingredients}
              onBlur={formikProps.handleBlur('ingredients')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.ingredients &&
                formikProps.errors.ingredients}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="Methods"
              onChangeText={formikProps.handleChange('methods')}
              value={formikProps.values.methods}
              onBlur={formikProps.handleBlur('methods')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.methods && formikProps.errors.methods}
            </Text>
            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddRecipeFormScreen;
