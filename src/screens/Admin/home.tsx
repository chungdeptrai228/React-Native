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
import Header from '../../components/header';
import * as Animatable from 'react-native-animatable';
import Homeheader from '../../components/homeheader';
import firebase from '@react-native-firebase/firestore';
import CountDown from 'react-native-countdown-component';
const SCREEN_WIDTH = Dimensions.get('window').width;
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {FadeFromBottomAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import FoodCard from '../../components/foodCard';

export default function home({navigation}:any) {
  const fb = firebase().collection('Category');
  const [data, setData] = useState([]);
  useEffect(() => {
    fb.onSnapshot(query => {
      const list: any = [];
      query.forEach(doc => {
        list.push({
          idd: doc.id,
          name:doc.data().name,
          id:doc.data().id,
          image:doc.data().image,
        });
      });
      console.log(list)
      setData(list)
    });
  });
  const [Delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={{flex:1}}>
      <Homeheader title="ExpressFood" navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={{backgroundColor: color.cardbackground, paddingBottom: 5}}>
          <View
            style={{
              marginTop: 7,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: Delivery ? color.buttons : color.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('restauranMap')
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: Delivery ? color.grey5 : color.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: color.grey5,
              borderRadius: 15,
              paddingVertical: 6,
              paddingHorizontal: 40,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name={'map-marker'}
                color={color.grey1}
                size={27}
              />
              <Text style={{marginLeft: 5}}>22 Bessie Street</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                backgroundColor: color.cardbackground,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Icon
                type="material-community"
                name={'clock-time-four'}
                color={color.grey1}
                size={27}
              />
              <Text style={{marginLeft: 5, marginRight: 5}}>Now</Text>
            </View>
          </View>
          <View style={{marginTop: 6}}>
            <Icon
              type="material-community"
              name={'tune'}
              color={color.grey1}
              size={27}
            />
          </View>
        </View>
        <View style={{backgroundColor: color.grey5, paddingVertical: 3}}>
          <Text style={styles.CateText}>Catogories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setIndexCheck(item.id)}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.sallCardSelected}
                      : {...styles.sallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={{uri:item.image}}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={{backgroundColor: color.grey5, paddingVertical: 3}}>
          <Text style={styles.CateText}>Free Delivery now</Text>
        </View>

        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              Options changing in{' '}
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: color.lightgreen}}
              digitTxtStyle={{color: color.cardbackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restauratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.iamges}
                  restauranName={item.restauranName}
                  farWay={item.farWay}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: color.grey5, paddingVertical: 3}}>
          <Text style={styles.CateText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restauratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.iamges}
                  restauranName={item.restauranName}
                  farWay={item.farWay}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: color.grey5, paddingVertical: 3}}>
          <Text style={styles.CateText}>Restaurants in your Area </Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restauratsData.map(item => (
            <View key ={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.iamges}
                restauranName={item.restauranName}
                farWay={item.farWay}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
{ Delivery &&
      <View style={styles.floatButton}>
        <TouchableOpacity onPress={()=>navigation.navigate('restauranMap')}>
            <Icon name='place' type='material' size={32}  color={color.buttons}  />
            <Text style={{color:color.grey2}}>Map</Text>
        </TouchableOpacity> 
      </View>
}
    </View>
  );
}
const styles = StyleSheet.create({
  floatButton:{
    position:"absolute",
    bottom:100,
    right:15,
    backgroundColor:'white',
    elevation:10,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center'
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 7,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 15,
  },
  CateText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: color.grey1,
    paddingLeft: 10,
  },
  sallCard: {
    borderRadius: 30,
    backgroundColor: color.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  sallCardSelected: {
    borderRadius: 30,
    backgroundColor: color.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: color.grey2,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: color.cardbackground,
  },
});
