import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Image } from 'react-native-svg'

const shop = ({navigation}) => {
  return (
    <View >
       <Text  style={{
            // color: "#000000",
            fontSize: 45,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 20 ,
            // paddingBottom: 90,
            alignSelf: 'center',

            }}>shop
            </Text>
        <View  style={styles.container}>
     
            </View>
            <View style={styles.container1}>
            <TouchableOpacity onPress={()=>navigation.navigate("oneShop")}>
            <Image
            style={styles.avatar}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
               />
              <View style={{  backgroundColor: '#E1E2E2',height: 50,width: 200,}}>
             <Text style={{ fontSize: 15, }}>Name of product</Text>
             <Text >150 dt</Text>
             </View>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default shop

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0891b2',
    // paddingVertical: 50,
    paddingHorizontal: 120,
    borderRadius: 50,
    alignSelf: 'center',
    // width: 500,
    maxWidth: '100%',
    alignSelf: 'center',
    alignItems: 'center'

  },
  timings: {
    color: '#fff',
    fontSize: '14px'
  },
  metaContainer: {
    justifyContent: 'space-between'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 200,
    width: 200,
    // borderRadius: 100
  },
  description: {
    color: 'white',
    marginTop: 5,
    fontSize: 20
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14
  },
  container1: {
    // backgroundColor: '#0891b2',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 50,
    // alignSelf: 'center',
    width: 500,
    maxWidth: '100%',
    // alignSelf: 'center',
    // alignItems: 'center'

  },
});