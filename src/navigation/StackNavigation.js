import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SplashScreen from '../screen/splace/SplashScreen';
import RegisterScreen from '../screen/register/RegisterScreen';
import HomeScreens from './BottomTabNavigation';
import LoginScreen from '../screen/login/LoginScreen';
import BottomTabs from './BottomTabNavigation';
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      // options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      // options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={BottomTabs}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default StackNavigation;
