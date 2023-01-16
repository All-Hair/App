import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {Entypo,AntDesign}from 'react-native-vector-icons';

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

import Navbar from '../../components/Navbar';
import { auth } from '../../firebase';
import Posts from './Posts';
import Saloon from '../saloon/Saloon';


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
    <SafeAreaView  style={{
      width: '100%',
      height: '100%',
      
    }}>
      <ScrollView
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
                <Image
                  source={require('my-app/assets/logo-removebg-preview.png')}
                  style={{ width: 80, height: 80 }}
                />
              </View>
             
             
              <TouchableOpacity >
                
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                }}
                onPress={handleSignOut}
              >
                              <AntDesign
                name="logout"
                size={30}
                color="white"
                style={{ marginRight: -7, marginTop: 7 }}
                onPress={handleSignOut}
              />
              </View>
              
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 40,
                color: '#FFF',
                left: 45,
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
            height: 1000,
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
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              photo={{
                uri: 'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Barber-Haircut-Styles-Fade-with-Brush-Up.jpg',
              }}
            />
            <View
              style={{
                height: 160,
                backgroundColor: '#d9d5ca',
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
                backgroundColor: '#d9d5ca',
                width: 20,
                marginLeft: -40,
                marginRight: 20,
                marginTop: 120,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}
            ></View>
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="boulbeba"
              profile={require('my-app/assets/profile-pic.jpg')}
              photo={{
                uri: 'https://i.pinimg.com/originals/db/6f/52/db6f52a815dedfac62b5339989470eec.jpg',
              }}
            />
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
              photo={{
                uri: 'https://global-uploads.webflow.com/5cb569e54ca2fddd5451cbb2/5d3078b775ae2c83a149e209_Barber-Industries-Kotara-29.jpg',
              }}
            />
            <View
              style={{
                height: 160,
                backgroundColor: '#d9d5ca',
                width: 20,
                marginLeft: 20,
                marginTop: 120,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
            ></View>
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
