import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {color, parameters, title} from '../global/styles';
import {Button, Icon, SocialIcon, withBadge} from 'react-native-elements';
import Header from './header';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
export default function homeheader({title, type}: any) {
  const BadgeIcon = withBadge(0)(Icon);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 20,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={color.headerText}
          size={32}
          onPress={()=>navigation.toggleDrawer()}
          
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View
        style={{
          marginRight: 10,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={color.headerText}
          size={32}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: color.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
  headerText: {
    color: color.headerText,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 5,
  },
});
