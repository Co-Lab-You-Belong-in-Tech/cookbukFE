import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';

const AddRecipeFormScreen = ({navigation, addRecipe}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', servings: '', ingredients: '', methods: ''}}
        onSubmit={(values, actions) => {
          // actions.resetForm(); clears values when submitted
          addRecipe(values);
        }}>
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Recipe Title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Servings"
              onChangeText={formikProps.handleChange('servings')}
              value={formikProps.values.servings}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Ingredients"
              onChangeText={formikProps.handleChange('ingredients')}
              value={formikProps.values.ingredients}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Methods"
              onChangeText={formikProps.handleChange('methods')}
              value={formikProps.values.methods}
            />

            <Button
              title="Add Recipe for Review"
              color="blue"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddRecipeFormScreen;
