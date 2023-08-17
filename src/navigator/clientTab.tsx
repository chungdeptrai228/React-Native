import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import home from '../screens/Admin/home';
import {color, parameters, title} from '../global/styles';
import {View} from 'react-native-animatable';
import SearchScreen from '../screens/Admin/SearchScreen';
import MyAccountScreen from '../screens/Admin/MyAccountScreen';
import MyOrderScreen from '../screens/Admin/MyOrderScreen';
import { ClientStack } from './clientStack';
const ClientTabs = createBottomTabNavigator();

export default function clientTab() {
  return (
    <ClientTabs.Navigator tabBarOptions={{activeTintColor: color.buttons}}>
      <ClientTabs.Screen
        name="Home"
        component={home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="My Order"
        component={MyOrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Order',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="My account"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Cccount',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="account-box"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <ClientTabs.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => ( 
            <Icon
              name="account-box"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
