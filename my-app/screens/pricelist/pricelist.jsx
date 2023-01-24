import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'

import Navbar from '../../components/Navbar'
import {Feather,Fontisto,MaterialIcons,MaterialCommunityIcons,Ionicons} from 'react-native-vector-icons'
const Pricelist = ({navigation}) => {
  return (<ImageBackground source={{
                    uri: "https://res.cloudinary.com/drd0uckic/image/upload/v1674347444/wo6hevke949lukzosslc.png",
                  }} style={{height:750,left:-6, }}>
    <View>
    <View style={{ width: '50%', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Sprofile')}>
                  <Ionicons
                    name="arrow-back"
                    style={{
                      fontSize: 18,
                      color: 'black',
                      borderColor: 'black',
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor: 'white',
                      opacity: 0.9,
                      top: 10,
                      left:20
                    }}
                  />
                </TouchableOpacity>
              </View>
        
      <View style={styles.info}>
     
         
          
             <Image
                  style={styles.profileImage}
                  source={{
                   
                  }}
                />
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          Hair cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>10 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          Shaves :{"                                       "}
            <Text style={{ fontWeight: "400" }}>5 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          Kids Cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>7 DT</Text>
          </Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={30} name='hair-dryer'>  </MaterialCommunityIcons>
          Razor cut  :{"                                       "}
            <Text style={{ fontWeight: "400" }}>12DT</Text>
          </Text>
          
          

          
          
         
        
       </View>
      
      <Navbar navigation={navigation} />
      
    </View></ImageBackground>
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

