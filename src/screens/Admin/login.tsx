import React, {useContext, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert} from 'react-native';
import {color, parameters, title} from '../../global/styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Header from '../../components/header';
import {Formik} from 'formik';
import auth from "@react-native-firebase/auth";
import * as Animatable from 'react-native-animatable';
import { SignInContext } from '../../contexts/authContext';

export default function login({navigation}: any) {
  const {dispatchSignedIn} =useContext(SignInContext)
  const [textInput2Fossued, setTextinput2] = useState(false);
  const Textinput1 = useRef(1);
  const Textinput2 = useRef(2);


  async function signIn(data:any) {
    try {
      const{password,email}=data
      const user=await auth().signInWithEmailAndPassword(email,password)
      if(user){
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
      }
    } catch (error) {
      Alert.alert('sai mk hoac pass')
    }
  }
  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />
      <View>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.textPlease}>
          Please enter the email and password
        </Text>
        <Text style={styles.textPlease}>registered with your account</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
          signIn(values)
        }}>
        { ({values,handleChange,handleSubmit})=>(
          <View>
            <View>
              <View>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Email"
                  // ref={Textinput1}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
              </View>
              <View style={styles.textInput2}>
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}
                  style={{marginLeft: 13}}>
                  <Icon
                    name={'lock'}
                    iconStyle={{color: color.grey3}}
                    type="material"
                  />
                </Animatable.View>
                <TextInput
                  style={{width: '80%', marginLeft: 5}}
                  placeholder="Password"  
                  onChangeText={handleChange('password')}
                  value={values.password}
                  // ref={Textinput2}
                  onFocus={() => {
                    setTextinput2(false);
                  }}
                  onBlur={() => {
                    setTextinput2(true);
                  }}
                />
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}
                  style={{marginRight: 20}}>
                  <Icon
                    name={'visibility-off'}
                    iconStyle={{color: color.grey3}}
                    type="material"
                  />
                </Animatable.View>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginVertical: 20}}>
              <Button
                title="SIGN IN"
                buttonStyle={styles.styleButton}
                titleStyle={styles.titleButton}
                onPress={handleSubmit}
//                 onPress={()=>navigation.navigate('DrawerNavigator')}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={{alignItems: 'center'}}>
        <Text style={{...styles.textForgot, textDecorationLine: 'underline'}}>
          Forgot password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
        />
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
        />
      </View>
      <View>
        <Text style={{...styles.textNew, marginLeft: 20, fontWeight: 'bold'}}>
          New on XpressFood ?
        </Text>
      </View>
      <View style={{alignItems: 'flex-end', paddingHorizontal: 20}}>
        <Button
          title={'Create an account'}
          buttonStyle={styles.createButon}
          titleStyle={styles.createTitle}
          onPress={()=>{
            navigation.navigate('SigUpScreen');
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  createTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  createButon: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
    marginHorizontal: 20,
  },
  textNew: {
    color: color.grey3,
    fontSize: 16,
  },
  textForgot: {
    color: color.grey3,
    fontSize: 16,
  },
  styleButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'ff8c52',
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
  container: {
    flex: 1,
  },
  textSignIn: {
    fontFamily: 'bold',
    fontSize: 22,
  },
  textPlease: {
    fontSize: 15,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
