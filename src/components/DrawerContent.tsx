import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Touchable,
  Pressable,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  color,
  parameters,
  title,
  filterDate,
  restauratsData,
} from '../global/styles';
import {
  Avatar,
  Button,
  Icon,
  SocialIcon,
  Switch,
  colors,
} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {SignInContext} from '../contexts/authContext';
export default function DrawerContent(props: any) {
  const {dispatchSignedIn} =useContext(SignInContext)
  async function signOut() {
    try {
      await auth()
        .signOut()
        .then(() => {
          console.log('USER SUCCESSFULLY SIGNED OUT')
          dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
        });
    } catch (err: any) {
      Alert.alert(err.code);
    }
  }
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: color.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: color.buttons,
              paddingLeft: 10,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              source={{
                uri: 'https://www.uab.edu/news/images/2018/Five_tips_Stream.jpg ',
              }}
              size={75}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: color.cardbackground,
                  fontSize: 18,
                }}>
                Jhon Mark
              </Text>
              <Text style={{color: color.cardbackground, fontSize: 14}}>
                markjhon@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 15,
            }}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: color.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: color.cardbackground, fontSize: 14}}>
                  My Favorites
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: color.cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: color.cardbackground, fontSize: 14}}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Driver console"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="motorbike"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{borderTopWidth: 1, borderTopColor: color.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.swichText}>
            <Text style={styles.TextDark}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout"
            color={color}
            size={size}
            onPress={() => {
              signOut()
            }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: color.grey2,
  },
  preferences: {
    fontSize: 16,
    color: color.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  swichText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  TextDark: {
    fontSize: 16,
    color: color.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
