import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../screens/Admin/login';
import loginWelcome from '../screens/Admin/loginWelcome';
import home from '../screens/Admin/home';
import clientTab from './clientTab';
import restauranMap from '../screens/Admin/reutauMaps';
import DrawerNavigator from './DrawerNavigator';
import SigUpScreen from '../screens/Admin/Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loginWelcome"
        component={loginWelcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <Stack.Screen
        name="SigUpScreen"
        component={SigUpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
