import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../Screen/WelcomeScreen';
import WelcomeScreen2 from '../Screen/WelcomeScreen2';

const Stack = createNativeStackNavigator();

const NavigationRender = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeScreen 2" component={WelcomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRender;
