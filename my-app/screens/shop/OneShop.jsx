import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OneShop = ({navigation}) => {
  return (
    <View>
      <Text  style={{ alignSelf: 'center',fontSize: 35,}}>DETAIL PRODUCT </Text>
    <View style={styles.container}>
            <Image
           style={styles.avatar}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
               />
               <Text style={{fontSize: 35,}}>Product description</Text>
               <Text  style={{fontSize: 20,}}>iwhibsibiubiubsuibiusuibuhicsoIO</Text>
    </View>
               <Button style={styles.button} title='Buy 'onPress={()=>{navigation.navigate('cart')}}/>
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
    width: 5000,
    maxWidth: '100%'
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
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14
  }
});