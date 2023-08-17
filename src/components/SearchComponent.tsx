import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Modal,
  TextInput,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {color, filterDate} from '../global/styles';
import {Icon} from 'react-native-elements';
import firebase from '@react-native-firebase/firestore';
import * as Animatable from 'react-native-animatable';
import filter from 'lodash/filter';
import {useNavigation} from '@react-navigation/native';
export default function SearchComponent({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);
  const [data, setData] = useState([...filterDate]);
  const fb = firebase().collection('Category');
  useEffect(() => {
    fb.onSnapshot(query => {
      const list: any = [];
      return query.forEach(doc => {
        list.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
    });
  });
  const contains = ({name}: any, query: any) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };
  const handleSearch = text => {
    const dataS = filter(filterDate, userSearch => {
      return contains(userSearch, text);
    });
    setData([...dataS]);
  };
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableNativeFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.SearchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>What are you looking for ?</Text>
        </View>
      </TouchableNativeFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.View
                animation={textInputFossued ? 'fadeInRight' : 'fadeInLeft'}
                duration={400}>
                <Icon
                  name={textInputFossued ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{marginLeft: 10}}
                />
              </Animatable.View>
              <TextInput
                style={{width: '90%'}}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
                onChangeText={handleSearch}
              />
              <Animatable.View
                animation={textInputFossued ? 'fadeInLeft' : ''}
                duration={400}>
                <Icon
                  name={textInputFossued ? 'cancel' : ''}
                  iconStyle={{color: color.grey3, marginRight: 25}}
                  type="material"
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch()
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultScreen', {item: item.name});
                  setModalVisible(false);
                  setTextInputFossued(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: color.grey2, fontSize: 15}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: color.grey3,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: color.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.grey2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchIcon: {
    fontSize: 24,
    padding: 5,
    color: color.grey2,
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: color.grey2,
  },
  modal: {
    flex: 1,
  },
});
