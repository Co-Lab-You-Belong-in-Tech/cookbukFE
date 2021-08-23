import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';

const recipeSchema = yup.object({
  title: yup.string().required().min(4),
  servings: yup
    .string()
    .test('is-num-1-25', 'Serving must be a number', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
  ingredients: yup.string().required().min(25),
  methods: yup.string().required().min(25),
});

const AddRecipeFormScreen = ({navigation, addRecipe}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', servings: '', ingredients: '', methods: ''}}
        validationSchema={recipeSchema}
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
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
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
              style={globalStyles.input}
              placeholder="Methods"
              onChangeText={formikProps.handleChange('methods')}
              value={formikProps.values.methods}
              onBlur={formikProps.handleBlur('methods')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.methods && formikProps.errors.methods}
            </Text>
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
