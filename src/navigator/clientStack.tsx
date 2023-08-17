import {createStackNavigator} from '@react-navigation/stack';
import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchResult from '../screens/Admin/SearchResult';
import SearchScreen from '../screens/Admin/SearchScreen';

const ClientSearch = createStackNavigator();
export function ClientStack() {
  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen" 
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResult}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
