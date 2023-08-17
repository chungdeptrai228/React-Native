import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import restauranMap from '../screens/Admin/reutauMaps';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function appStack() {
  return (
    <Stack.Navigator>
      
       <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="restauranMap"
        component={restauranMap}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
