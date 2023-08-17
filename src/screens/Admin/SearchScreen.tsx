import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  ImageBackgroundComponent,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import {color, filterDate} from '../../global/styles';
import { ScrollView } from 'react-native-gesture-handler';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function SearchScreen() {
  return (
    <View style={{flex:1,marginHorizontal: 10}}>
      <SearchComponent />
      <ScrollView>
      <View style={{marginBottom:20}}>
        <FlatList
          style={{marginBottom: 1}}
          data={filterDate}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{color: color.cardbackground}}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>Top Catogories</Text>}
        />
      </View>
      <View>
        <FlatList
          style={{marginBottom: 1}}
          data={filterDate}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{color: color.cardbackground}}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>More Catogories</Text>}
        />
      </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },
  listHeader: {
    fontSize: 16,
    color: color.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },
  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52,52,52,0.3)',
  },
});
