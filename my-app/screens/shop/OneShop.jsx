import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OneShop = () => {
  return (
    <View style={{ alignItems: "center"}}>
      <Text  style={{
            // color: "#000000",
            fontSize: 35,
            fontWeight: "bold",
            marginVertical: 10,
            marginTop: 20 ,
            paddingBottom: 50,
            alignItems: "center"
            }}>DETAIL PRODUCT </Text>
            <Image
            style={{width: '70%', height: '50%'}}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
               />
               <Text style={{fontSize: 35,}}>Product description</Text>
               <Text  style={{fontSize: 20,}}>iwhibsibiubiubsuibiusuibuhicsoIO</Text>
               <Button title=''/>
    </View>
  )
}

export default OneShop

const styles = StyleSheet.create({})