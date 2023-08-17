import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput,Image} from 'react-native';
import {color, image, parameters, title} from '../../global/styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Header from '../../components/header';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
export default function loginWelcome({navigation}:any) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 30,
        }}>
        <Text style={{fontSize: 26, color: color.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTANRANTS
        </Text>
        <Text style={{fontSize: 26, color: color.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex:4,justifyContent:"center"}}>
        
        <Swiper autoplay={true}>
            <View style={styles.slide1}>
                <Image style={{width:"100%",height:"100%"}} source={image.food1}/>
            </View>
            <View style={styles.slide2}>
                <Image style={{width:"100%",height:"100%"}} source={image.food2}/>
            </View>
            <View style={styles.slide3}>
                <Image style={{width:"100%",height:"100%"}} source={image.food3}/>
            </View>
            <View style={styles.slide3}>
                <Image style={{width:"100%",height:"100%"}} source={image.food4}/>
            </View>
        </Swiper>
      </View>
     <View style={{flex:4,justifyContent:"center",marginBottom:20}}>
     <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="SIGN IN"
          buttonStyle={styles.styleButton}
          titleStyle={styles.titleButton}
          onPress={()=>{
            navigation.navigate('login');
          }}
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title="Create your account"
          buttonStyle={styles.styleAccount}
          titleStyle={styles.titleAccount}
          onPress={()=>{
            navigation.navigate('SigUpScreen');
          }}
        />
      </View>
     </View>
    </View>
  );
}
const styles=StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      styleButton: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'orange',
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
      },
      titleButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -2,
      },
      styleAccount: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'ff8c52',
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
      },
      titleAccount: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -2,
      }
})
