import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon, colors} from 'react-native-elements';
import {
  color,
  parameters,
  title,
  filterDate,
  restauratsData,
} from '../global/styles';
import {View} from 'react-native-animatable';

export default function FoodCard({
  OnPressFoodCard,
  restauranName,
  deliveryAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farWay,
  averageReview,
  images,
  screenWidth,
}: any) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}} 
        />
      <View>
        <View>
          <Text style={{...styles.restaurantName}}>{restauranName}</Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{...styles.distance}}>
            <Icon
              name="place"
              type="material"
              color={colors.grey2}
              size={18}
              iconStyle={{marginTop: 3}}
            />
            <Text style={{...styles.Min}}>{farWay} Min</Text>
          </View>
          <View style={{flex: 8, flexDirection: 'row'}}>
            <Text style={styles.address}>{businessAddress}</Text>
          </View>
        </View>
      </View>
      </View>
      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
      
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderLeftWidth: 5,
    borderWidth: 1,
    borderColor: color.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft:10
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: colors.grey4,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview:{
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft:0
  }
});
