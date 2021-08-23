import React from 'react';
import {View, Text} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {globalStyles} from '../styles/global';
import FlatButton from '../shared/button';

const FollowRecipeScreen = ({navigation, route}) => {
  const [currentStep, setStep] = useState(0);
  const [nextButtonText, setNextButtonText] = useState('next');

  const pressNext = () => {
    if (nextButtonText === 'done') {
      navigation.navigate('CookbookScreen');
    }
    if (currentStep === route.params.length - 2) {
      setNextButtonText('done');
      setStep(currentStep + 1);
    } else {
      setStep(currentStep + 1);
    }
  };

  const pressPrev = () => {
    if (currentStep === route.params.length - 1) {
      setStep(currentStep - 1);
      setNextButtonText('next');
    } else if (currentStep !== 0) {
      setStep(currentStep - 1);
    } else {
      return;
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Recipe Steps</Text>
      {console.log(currentStep)}
      <Text>
        Step {currentStep + 1} {route.params[currentStep]}
      </Text>
      <FlatButton text="prev" onPress={() => pressPrev()} />
      <FlatButton text={nextButtonText} onPress={() => pressNext()} />
    </View>
  );
};

export default FollowRecipeScreen;
