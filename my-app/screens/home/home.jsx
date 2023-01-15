import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import {Entypo,AntDesign}from 'react-native-vector-icons';
import Videos from '../videoss/videos';

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

import Menu from '../../components/Menu';
const { width, height } = Dimensions.get('window');

import Navbar from '../../components/Navbar';
import { auth } from '../../firebase';

import Saloon from '../saloon/Saloon';
import Posts from './Posts';
import { StatusBar } from 'native-base';


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
  // console.log(auth.currentUser?.email);

  return (

    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <StatusBar hidden />

      <ScrollView
        contentContainerStyle={{
          flexGrow: height,
        }}
        showsVerticalScrollIndicator={false}
        style={{ height: '100%', backgroundColor: '#CCC9C0' }}
      >
        <ImageBackground
          source={require('my-app/assets/profilbackground.png')}
          style={{ width: '100%' }}
        >
          <View style={{ height: 240, width: '100%', paddingHorizontal: 35 }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                paddingTop: 40,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '50%' }}>
                {/* <Image
                  source={require('my-app/assets/logo-removebg-preview.png')}
                  style={{ width: 80, height: 80 }}
                /> */}
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                }}
              >

                {/* <Menu /> */}
                <AntDesign
                  name="logout"
                  size={30}
                  color="white"
                  style={{ marginRight: -7, marginTop: 7 }}
                  onPress={handleSignOut}
                />

              </View>
            </View>
            <Text
              style={{
                fontSize: 35,
                color: '#000000',
                left: 42,
                fontWeight: 'bold'
                // paddingTop: 20,
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
                top: 10,
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
              <Entypo name="magnifying-glass" size={25} color="#9ca1a2" />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#FFF',
            borderTopLeftRadius: 110,
            // borderTopRightRadius: 40,
            height: '100%',
            paddingHorizontal: 35,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              left: 30,
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
          <View
            style={{
              flexDirection: 'row',
            }}
          >
           
            <Posts
            url={'https://res.cloudinary.com/drd0uckic/video/upload/c_scale,h_887,w_900/v1673783419/dkeils6ocvlub2aiz9sj.mp4'}
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              photo={{
                uri: 'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Barber-Haircut-Styles-Fade-with-Brush-Up.jpg',
                
              }}
              profile={require('my-app/assets/profile-pic.jpg')}
            />
            <View
              style={{
                height: 160,
                // backgroundColor: '#d9d5ca'
                width: 20,
                marginLeft: 20,
                marginTop: 120,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}
          > 
         
            <View
              style={{
                height: 160,
                width: 20,
                marginLeft: -40,
                marginRight: 20,
                marginTop: 120,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}
            ></View>
            
            <Posts
            url={'https://res.cloudinary.com/drd0uckic/video/upload/c_scale,h_800,w_800/v1673786898/hl5emizftvrjrmokror0.mp4'}
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              profile={require('my-app/assets/profile-pic.jpg')}
              
             
            />
          </View>
          
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Posts
             url={'https://res.cloudinary.com/drd0uckic/video/upload/v1673786891/ztwjv9lavtk3pcqvgpo1.mp4'}
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              profile={require('my-app/assets/profile-pic.jpg')}
             
            />
            <View
              style={{
                height: 160,
                width: 20,
                marginLeft: 20,
                marginTop: 120,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
            ></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              profile={require('my-app/assets/profile-pic.jpg')}
              url={'https://res.cloudinary.com/drd0uckic/video/upload/v1673786887/zlp6gogdikhdcstdtklk.mp4'}
            />
            <View
              style={{
                height: 160,
                width: 20,
                marginLeft: 20,
                marginTop: 120,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              profile={require('my-app/assets/profile-pic.jpg')}
              url={'https://res.cloudinary.com/drd0uckic/video/upload/v1673786886/kgzgquhzog9cefqylyhj.mp4'}
            />
            <View
              style={{
                height: 160,
                width: 20,
                marginLeft: 20,
                marginTop: 120,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
            ></View>
          </View>

        </View>
        <View style={{height:100}}></View>
      </ScrollView>

      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
