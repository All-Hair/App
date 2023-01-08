import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';


import {
  Button,
  Dimensions,
  Image,
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
      <View style={{ height: 260, width: '100%', paddingHorizontal: 35 }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingTop: 40,
            alignItems: 'center',
          }}
        >
          <View style={{ width: '50%'}}>
            <Image
              source={require('my-app/assets/logo-removebg-preview.png')}
              style={{ width:80, height: 80 }}
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
            fontSize: 25,
            color: '#FFF',
          }}
        >
          Find Your coiff
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#9ca1a2',
            borderRadius: 20,
            borderWidth: 0.2,
            paddingVertical: 5,
            alignContent: 'center',
          }}
        >
          <TextInput
            placeholder="search"
            style={{
              paddingHorizontal: 20,
              // fontFamily:'Medium',
              fontSize: 15,
              width: '90%',
              color: '#9ca1a2',
            }}
          />
          <Icon name="magnifying-glass" size={25} color="#9ca1a2" />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 1000,
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
          }}
        >
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({});
