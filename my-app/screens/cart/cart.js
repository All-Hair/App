import { Box, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign, Entypo, Ionicons, Zocial } from 'react-native-vector-icons';
const { width, height } = Dimensions.get('window');

import Navbar from '../../components/Navbar';
import { COLOURS, Items } from './database/Database';
const Cartt = ({ navigation }) => {
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductInfo', { productID: data.id })
        }
        style={{
          width: '48%',
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.white,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
            borderWidth: 1,
            borderColor: 'black',
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        ></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        ></View>

        <Text> {data.productPrice} DT</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: height }}
        showsHorizontalScrollIndicator={false}
        style={{ height: '100%', backgroundColor: COLOURS.maincolor }}
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
                paddingTop: 30,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '50%', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Ionicons
                    name="arrow-back"
                    style={{
                      fontSize: 18,
                      color: COLOURS.black,
                      borderColor: COLOURS.black,
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor: COLOURS.white,
                      opacity: 0.9,
                      top: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'flex-end',
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                  <Zocial
                    name="cart"
                    style={{
                      fontSize: 18,
                      color: COLOURS.black,
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: COLOURS.black,
                      top: 10,
                      backgroundColor: COLOURS.white,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 36,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                // marginBottom: 3,
                left: 20,
                top: 25,
              }}
            >
              Shop &amp; Service
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.black,
                fontWeight: '400',
                letterSpacing: 1,
                lineHeight: 24,
                left: 10,
                top: 30,
              }}
            >
              This shop offers both products and services
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#FFF',
            borderTopLeftRadius: 110,
            height: '100%',
            paddingHorizontal: 35,
          }}
        >
          
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              left:5
            }}
          >
             <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          top: 50,
          height: '100%',
        }}
      >
        {accessory.map((data) => {
          return <ProductCard data={data} key={data.id} />;
        })}
      </View>
          </View>
        </View>
        <View style={{height:130}}></View>

      </ScrollView>

      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Cartt;
