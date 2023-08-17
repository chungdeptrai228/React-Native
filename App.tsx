import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {color} from './src/global/styles';
import RootNavigator from './src/navigator/rootNavigator';
import Login from './src/screens/Admin/login';
import LoginWelcome from './src/screens/Admin/loginWelcome';
import 'react-native-gesture-handler';
import { SignInContextProvider } from './src/contexts/authContext';
export default function App() {
  return (
    <SignInContextProvider>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={color.statusbar} />
        <RootNavigator />
    </View>
    </SignInContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
