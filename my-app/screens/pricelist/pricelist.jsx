import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'

import Navbar from '../../components/Navbar'
import {Feather,Fontisto,MaterialIcons,MaterialCommunityIcons,} from 'react-native-vector-icons'
const Pricelist = ({navigation}) => {
  return (
    <View>
       <View style={styles.info}>
          <Text style={[styles.subText]}>SALOON NAME</Text>
          
             <Image
                  style={styles.profileImage}
                  source={{
                    uri: 'https://res.cloudinary.com/dxvvdq91a/image/upload/v1672933058/logo-removebg-preview_zqqgbr.png',
                  }}
                />
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          hair cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>10 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          hair cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>10 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          hair cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>10 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          hair cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>10 DT</Text>
          </Text>
          
          

          
          
         
        </View>
        
      <Navbar navigation={navigation} />
      
    </View>
  )
}

export default Pricelist

const styles = StyleSheet.create({
    info: {
        opacity: 0.8,
        shadowColor: "black",
        shadowOffset: {
         
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#CCC9C0",
        height: 630,
        width: 350,
        borderRadius: 20,
        letterSpacing: 2,
        justifyContent: "space-evenly",
        padding: 14,
        top:70
      },
      subText: {
        fontSize: 40,
        color: "black",
        textDecorationLine: 'underline',
        fontWeight: "500",
        top:-55,
        borderRadius: 5,
       
      },
      profileImage: {
        width:150,
        height:150,
        top:-90,
       
      },
      text: {
        
        top:-100
      },
      interactButton: {
        flex: 3,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCC9C0',
        margin: 9,
        borderRadius: 10,
        shadowOpacity: 0.7,
            shadowRadius: 7.49,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            
            elevation: 6,
      },
      interactButtonText: {
        
        borderRadius: 10,
        
            
        color: '#FFF',
        fontSize: 18,
        paddingVertical: 6,
      },
     
})