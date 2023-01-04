import { StyleSheet, Text, View,Image, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { Button } from 'react-native'
// import { Image } from 'react-native-svg'
const data =[
  {
    id: '1',
    name: 'Product 1',
    price: 9.99,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 14.99,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 19.99,
    image: 'https://picsum.photos/200/300',
  },
]
const Shop = ({navigation}) => {
  const [item,setItem]=useState(data)
  console.log(item,'<-------->');
  return (
    <View >
    <SafeAreaView >
       <Text  style={{
            fontSize: 45,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 20 ,
            alignSelf: 'center',
            

            }}>shop
            </Text>
        {/* <View  style={{flex: 1}}>
     
            </View>
            <View style={styles.container1}>
           
            <View style={{flex: 100}} >
            <TouchableOpacity onPress={()=>navigation.navigate("OneShop")}>
            <Image
             
            style={styles.avatar}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU'}}
               />
              <View style={{  backgroundColor: '#E1E2E2',height: 50,width: 150,}}>
             <Text style={{ fontSize: 15, }}>Name of product</Text>
             <Text >150 dt</Text>
             </View>
           
            </TouchableOpacity>
            </View>
           </View>
           <View style={styles.container}>
           
           <View style={{flex: 100}} >
           <TouchableOpacity onPress={()=>navigation.navigate("OneShop")}>
           <Image
           style={styles.avatar}
           source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU'}}
              />
             <View style={{  backgroundColor: '#E1E2E2',height: 50,width: 150,}}>
            <Text style={{ fontSize: 15, }}>Name of product</Text>
            <Text >150 dt</Text>
            </View>
          
           </TouchableOpacity>
           </View>
          </View> */}
          {/* {item.map((e,i)=>{
            
          })} */}
            <View style={styles.item}>
            <Image style={styles.itemImage} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU" }} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>Water Spray </Text>
              <Text style={styles.itemName}>150 DT </Text>
              {/* <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text> */}
            </View>
              <Button  title='More' onPress={()=>{}}/>
            {/* <Button
              style={styles.itemAdd}
              title="Add to Cart"
              onPress={() => addToCart(item)}
            /> */}
          </View>

    <Navbar />
    </SafeAreaView>
    </View>
  )
}

export default Shop

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
    width: 50,
    height: 50,
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 90,
    height: 90,
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

