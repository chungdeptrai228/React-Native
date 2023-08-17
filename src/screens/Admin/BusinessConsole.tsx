import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Touchable,
  Pressable,
  Image,
} from 'react-native';
import {
  color,
  parameters,
  title,
  filterDate,
  restauratsData,
} from '../../global/styles';
import {Button, Icon, SocialIcon, colors} from 'react-native-elements';
import { create } from 'react-test-renderer';

export default function BusinessConsole(){
    return(
        <View style={styles.container}><Text>Business Console</Text></View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})