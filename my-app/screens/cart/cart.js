import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import {COLOURS, Items} from './database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/Navbar';
import {ScrollView,Box} from 'native-base'
const Cartt = ({navigation}) => {
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

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '48%',
          marginVertical: 14,
        }}>
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
            borderColor:'black'
            
          }}>
         
         
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
          }}>
          {data.productName}
        </Text>
       
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              
              
            </View>
           
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              
            </View>
          
        
        <Text> {data.productPrice} DT</Text>
      </TouchableOpacity>
    );
  };

  return (

    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        
      }}>

      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
     
      <ImageBackground source={require('../../assets/profilbackground.png')} >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
           
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}  >
            <Ionicons
              name="arrow-back"
              style={{
                fontSize: 18,
                color: COLOURS.black,
                borderColor:COLOURS.black,
                padding: 15,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: COLOURS.white,
                top:20
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Zocial
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.black,
                padding: 14,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.black,
                top:20,
                backgroundColor: COLOURS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 36,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 3,
              left:50,
              top:-15
            }}>
            Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
              left:10
            }}>
           
            This shop offers both products and services
          </Text>
          
        </View>
        <View
          style={{
            padding: 16,
            top:60,
            backgroundColor:'#FFF',
            borderTopLeftRadius: 110,

          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor:'#ccc9c0',
              borderRadius:7,
              top:50,
              borderTopLeftRadius: 110,
              borderTopRightRadius: 120,
              
            }}>
            
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  left:150,
                  flexDirection: 'row',
                  alignItems: 'center'
                  
                }}>
                Products
              </Text>
             
            </View>
            
    <ScrollView showsVerticalScrollIndicator={false}>

          <Box
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              top:50,
              height:500
              
            }}>
            {accessory.map(data => {
              return < ProductCard data={data} key={data.id} />;
            })}
          </Box>
         </ScrollView>
        </View>
       
        

        </ImageBackground>
        
      
      <View>
     
      </View>
      
      <Navbar navigation={navigation}/>
    </View>
  

    
  );
};

export default Cartt;
