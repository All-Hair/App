import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'
import {Feather,Fontisto,MaterialIcons,MaterialCommunityIcons,} from 'react-native-vector-icons'
const Pricelist = ({navigation}) => {
  return (
    <View>
       <View style={styles.info}>
          <Text style={[styles.subText]}>informations</Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={19} name='hair-dryer'>  </MaterialCommunityIcons>
            Name :{"                "}
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Feather  size ={19} name='phone-call'>  </Feather>
             Phone :{"                "}
            
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Fontisto  size ={19} name='email'>  </Fontisto>
            Email :{"                "}
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialIcons  size ={19} name='place'>  </MaterialIcons>
            Adress :{"                "}
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text>
        </View>
      <Navbar navigation={navigation} />
      
    </View>
  )
}

export default Pricelist

const styles = StyleSheet.create({
    info: {
        opacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#CCC9C0",
        height: 630,
        width: 350,
        borderRadius: 20,
        letterSpacing: 5,
        justifyContent: "space-evenly",
        padding: 2,
        top:70
      },

})