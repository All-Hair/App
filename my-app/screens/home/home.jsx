import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { Easing, interpolate } from 'react-native-reanimated';
import Navbar from '../../components/Navbar';
import { auth } from '../../firebase';

const Home = ({ navigation }) => {
  const [popularSelected, setPop] = useState(true);
  onTabPressed = () => {
    setPop(!popularSelected);
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };
  console.log(auth.currentUser?.email);

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: '100%', backgroundColor: '#CCC9C0' }}
      >
        <ImageBackground source={require('my-app/assets/profilbackground.png')}>
        <View style={{ height: 260, width: '100%', paddingHorizontal: 35 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingTop: 40,
              alignItems: 'center',
            }}
          >
            <View style={{ width: '50%' }}>
              <Image
                source={require('my-app/assets/logo-removebg-preview.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'flex-end',
              }}
            >
              <Icon
                name="dots-two-vertical"
                size={22}
                color="white"
                style={{ marginRight: -7, marginTop: 7 }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 40,
              color: '#FFF',
              left: 35,
              paddingTop: 20,
            }}
          >
            Find Your coiff
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#fff',
              borderRadius: 20,
              borderWidth: 0.2,
              paddingVertical: 5,
              alignContent: 'center',
              backgroundColor: '#fff',
              top:10
            }}
          >
            <TextInput
              placeholder="search"
              style={{
                paddingHorizontal: 20,
                // fontFamily:'Medium',
                fontSize: 15,
                width: '90%',
                color: '#fff',
              }}
            />
            <Icon name="magnifying-glass" size={25} color="#9ca1a2" />
          </View>
        </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#FFF',
            borderTopLeftRadius: 110,
            // borderTopRightRadius: 40,
            height: 1000,
            paddingHorizontal: 35,
            
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              left:30
            }}
          >
            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: popularSelected ? '#CCC9C0' : '#FFF',
                borderBottomWidth: 4,
                paddingVertical: 6,
              }}
            >
              <Text
                style={{
                  color: popularSelected ? '#CCC9C0' : '#d9d5ca',
                }}
              >
                MOST POPULAR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: popularSelected ? '#FFF' : '#CCC9C0',
                borderBottomWidth: 4,
                paddingVertical: 6,
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  color: popularSelected ? '#d9d5ca' : '#CCC9C0',
                }}
              >
                RECENT
              </Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({});
