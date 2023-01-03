import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OneShop = ({navigation}) => {
  return (
    <View>
      <Text  style={{  alignSelf: 'center',fontSize: 35,}}>DETAIL PRODUCT </Text> 
    <View style={styles.container}>
            <Image
           style={styles.avatar}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
               />
               <View style={{  backgroundColor: '#CCC9C0',height: 200,width: 250,}}>
               <Text style={{fontSize: 35,}}> Description</Text>
               <Text  style={{fontSize: 20,}}>iwhibsibiubiubsuibiusuibuhicsoIO</Text>
               </View>
    </View>
      <TouchableOpacity
                style={styles.button} title='Buy 'onPress={()=>{navigation.navigate('cart')}}>
                   <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
    </View>
  )
}

export default OneShop

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0891b2',
    paddingVertical: 50,
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
    width: 250,
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
  }
});