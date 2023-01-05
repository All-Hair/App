import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'

const OneShop = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text  style={{    fontSize: 35,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 20 ,
            alignSelf: 'center',}}>DETAIL PRODUCT </Text> 
             
          <View style={styles.item}>
            <Image style={styles.itemImage} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU" }} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>Salvator </Text>
              <Text style={styles.itemName}>80 DT </Text>
            </View>
              <Button  title='More' onPress={()=>{navigation.navigate('OneShop')}}/>
          </View>
    {/* <View style={styles.container}>
            <Image
           style={styles.avatar}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU'}}
               />
               <View style={{  backgroundColor: '#E1E2E2',height: 200,width: 250,}}>
               <Text style={{fontSize: 35,}}> Description</Text>
               <Text  style={{fontSize: 20,}}>iwhibsibiubiubsuibiusuibuhicsoIO</Text>
               </View>
             </View>
                <TouchableOpacity
                style={styles.button} title='Buy 'onPress={()=>{navigation.navigate('Cart')}}>
                   <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity> */}
                
             
       <Navbar/>
              
    </SafeAreaView>
  )
}

export default OneShop

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  cart: {
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  cartItemImage: {
    width: 500,
    height: 500,
    marginRight: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartItemRemove: {
    alignSelf: 'stretch',
  },
  item: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 100,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 200,
    height:300,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  itemAdd: {
    alignSelf: 'stretch',
  },
  button:{
    marginLeft:10 
  }
});