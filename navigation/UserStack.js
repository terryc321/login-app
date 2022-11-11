

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome"   component={WelcomeScreen} />
          <Stack.Screen name="Home"   component={HomeScreen} />
          <Stack.Screen name="Map"    component={MapScreen} />
          <Stack.Screen name="Photo"  component={PhotoScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


