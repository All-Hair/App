import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert,Dimensions,SafeAreaView} from 'react-native';

import React from 'react'
const { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Navbar = ({navigation}) => {
    


   
        return (
            <SafeAreaView style={{
                flex: 1,
                top:height -70,
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

                    <TouchableOpacity onPress={()=>navigation.navigate('Mainbutton')} >
                        <View style={[styles.button, styles.actionBtn]}>
                           
                            <Image style={{ width: 50, height: 50 }}
                                resizeMode="contain"
                                source={ require('my-app/assets/logo-removebg-preview.png')}  />
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
                        <AntDesign name="home" size={30} color="black" />

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center', top:-1
                    }}>

                        <TouchableOpacity onPress={() => {navigation.navigate("Notifications")}}
                            
                        >
                          <Ionicons name="notifications-outline" size={30} color="black"  />
                       
                        </TouchableOpacity >
                        <Text style={{justifyContent:'center',alignItems:'center' }}>notifications</Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', right:    12, alignItems: 'center',justifyContent:'space-between',marginStart:85,
                        }}>

                            <TouchableOpacity
                             onPress={() => { navigation.navigate('Cart') }}

                            >
                             <AntDesign name="shoppingcart" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Shop</Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end', top:2
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => {navigation.navigate("Sprofile")}}
                            >
                                <AntDesign name="user" size={30} color="black" />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}> Profile </Text>
                           
                        </View>

                    
                </View>
            </SafeAreaView>
        );
    

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC9C0'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 6.0,

    },
    actionBtn: {

        backgroundColor: '#CCC9C0',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
        

    }


});

export default Navbar