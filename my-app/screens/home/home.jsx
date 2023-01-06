import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
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
  View
} from 'react-native';
import { auth } from '../../firebase';
import Animated, { Easing, interpolate } from 'react-native-reanimated';
import Navbar from '../../components/Navbar';

const { Value, timing } = Animated;

const Home = ({ navigation }) => {
  // const [_scroll_y,setScroll_y]=useState(0)
  const _scroll_y = new Animated.Value(0);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };
  console.log(auth.currentUser?.email);

  const _diff_clamp_scroll_y = Animated.diffClamp(_scroll_y, 0, 50);
  
  const _header_height = Animated.interpolateNode(_diff_clamp_scroll_y, {
    inputRange: [0, 410],
    outputRange: [410, 0],
    extrapolate: 'clamp',
  });
  const _header_translate_y = Animated.interpolateNode(_diff_clamp_scroll_y, {
    inputRange: [0, 410],
    outputRange: [0, -410],
    extrapolate: 'clamp',
  });
  const _header_opacity = Animated.interpolateNode(_diff_clamp_scroll_y, {
    inputRange: [0, 410],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: _header_height,
            transform: [{ translateY: _header_translate_y }],
            opacity: _header_opacity,
          },
        ]}
      >
        <TextInput
          style={{
            borderRadius: 10,
            color: 'black',
            paddingHorizontal: 18,
            width: width - 120,
            backgroundColor: '#D9D9D9',
            borderColor: '#CCC9C0',
            borderWidth: 1,
            marginTop: 35,
            height: 40,
            marginLeft: width - 390,
          }}
          placeholder="search"
        ></TextInput>
        <Image
          source={require('my-app/assets/logo-removebg-preview.png')}
          style={{
            width: 170,
            height: 170,
            marginTop: 30,
            marginLeft: width - 320,
          }}
        />
        <TouchableOpacity style={{ marginLeft: 50 }}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={require('my-app/assets/noti.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: width - 350, top: 10 }}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/5043688-removebg-preview_v3u4hm.png',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: width - 245 }}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/6178238-removebg-preview_cpuyde.png',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: width - 160, bottom: 67 }}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/2838838-removebg-preview_xksvd2.png',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: width - 100, bottom: 152 }}>
          <View>
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/3661442-removebg-preview_cwdejl.png',
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.fake_icon_box}></View>
      </Animated.View>
      <Animated.ScrollView
        style={[styles.scroll_view, {}]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={5}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: _scroll_y } },
          },
        ])}
      >
        <View style={[styles.fake_post]} />
        <View style={[styles.fake_post]} />
        <View style={[styles.fake_post]} />
        <View style={[styles.fake_post]} />
        <View style={[styles.fake_post]} />
      </Animated.ScrollView>
      <View >
      <Text>Email:{auth.currentUser?.email}</Text>
      
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Uprofile');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      </View>
   
        <Navbar />

        
   
      <Navbar />

      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#CCC9C0',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  header: {
    position: 'absolute',
    width: width,
    height: height - 440,
    backgroundColor: '#CCC9C0',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  circleButton: {
    width: 50,
    height: 50,
  },
  scroll_view: {
    flex: 1,
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  // fake_icon_box: {
  //   backgroundColor: '#e4e6eb',
  //   width: width,
  //   height: 100,
  //   borderRadius: 40,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   top:200
  // },
});
