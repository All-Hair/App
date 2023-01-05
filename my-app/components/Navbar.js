import {
  Alert,
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import React from 'react';
const { width, height } = Dimensions.get('window');

const Navbar = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        top: height - 70,
        flexDirection: 'column',
        width: width,
        position: 'absolute',
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'grey',
          width: width / 6.5,
          height: width / 6.5,
          borderRadius: 35,
          bottom: 35,
          zIndex: 10,
        }}
      >
        <TouchableOpacity>
          <View style={[styles.button, styles.actionBtn]}>
            <Image
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
              source={require('my-app/assets/logo-removebg-preview.png')}
              onPress={() => {
                Alert.alert('ok');
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#CCC9C0',
          border: 2,
          radius: 3,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          x: 0,
          y: 0,
          style: { marginVertical: 5 },
          bottom: 0,
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/6178238-removebg-preview_cpuyde.png',
              }}
              onPress={() => {
                Alert.alert('');
              }}
            ></Image>
          </TouchableOpacity>
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            Home
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginStart: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/5043688-removebg-preview_v3u4hm.png',
              }}
              onPress={() => {
                Alert.alert('click');
              }}
            />
          </TouchableOpacity>
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            search{' '}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginStart: 85,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Shop');
            }}
          >
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/2838838-removebg-preview_xksvd2.png',
              }}
              onPress={() => {
                navigation.navigate('shop');
              }}
              style={{ marginHorizontal: 16, width: 30, height: 30 }}
              containerStyle={{ marginHorizontal: 16 }}
            />
          </TouchableOpacity>
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            Shop
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sprofile');
            }}
          >
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/3661442-removebg-preview_cwdejl.png',
              }}
              style={{ marginHorizontal: 16, width: 30, height: 30 }}
              containerStyle={{ marginHorizontal: 16 }}
            />
          </TouchableOpacity>
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            {' '}
            Profile{' '}
          </Text>
        </View>

        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};
   
        return (
            <SafeAreaView style={{
                flex: 1,
                top:height -20,
                flexDirection: 'column',
                width: width,
                 position: 'absolute',
            }}>

                 <View style={{

                   
                    alignSelf: 'center',
                    backgroundColor: 'grey',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10


                }}>

                    <TouchableOpacity >
                        <View style={[styles.button, styles.actionBtn]}>
                           
                            <Image style={{ width: 50, height: 50 }}
                                resizeMode="contain"
                                source={ require('my-app/assets/logo-removebg-preview.png')}  onPress={()=>{Alert.alert("ok")}}/>
                        </View>
                    </TouchableOpacity>
                </View> 
                <View style={{

                    position: 'absolute',
                    backgroundColor: '#CCC9C0',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity  onPress={() => {navigation.navigate('Home')}} >
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/6178238-removebg-preview_cpuyde.png' }}

                               
                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/5043688-removebg-preview_v3u4hm.png' }}
                                
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center' }}>search </Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:85,
                        }}>

                            <TouchableOpacity
                             onPress={() => { navigation.navigate('Shop') }}

                            >
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/2838838-removebg-preview_xksvd2.png' }}
                                    onPress={() => { navigation.navigate('shop') }}
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Shop</Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => {navigation.navigate("Sprofile")}}
                            >
                                <Image
                                    source={{ uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672691231/3661442-removebg-preview_cwdejl.png' }}

                                    
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}> Profile </Text>
                           
                        </View>

                    {/* </View> */}
                </View>
            </SafeAreaView>
        );
    

                      

        export default Navbar;


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC9C0',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 1,
    borderRadius: 35,
    position: 'absolute',
    // bottom: -70,
    right: 0,
    top: 4,
    left: 4.5,
    shadowOpacity: 6.0,
  },
  actionBtn: {
    backgroundColor: '#CCC9C0',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

