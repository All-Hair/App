import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Image } from 'react-native-svg'

const shop = ({navigation}) => {
  return (
    <View style={{  width: 430,  }}>
        <View style={{ alignItems: "center"}}>
      <Text  style={{
            // color: "#000000",
            fontSize: 45,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 20 ,
            // paddingBottom: 90,
            alignItems: "center"
            }}>shop
            </Text>
            </View>
            <View >
            <TouchableOpacity onPress={()=>navigation.navigate("oneShop")}>
            <Image
            style={{width: '40%', height: '60%'}}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
               />
             <Text >Name of product</Text>
             <Text >Price</Text>

            </TouchableOpacity>
            </View>
    </View>
  )
}

export default shop

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });