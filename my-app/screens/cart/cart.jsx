import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView } from 'react-native';
import Navbar from '../../components/Navbar';



const Cart = () => {
  const [items, setItems] = React.useState(data);
  const data = [
    {
      id: "1",
      name: "Water Spray",
      price: "150 DT ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU",
    },
  ]
  const addItem = () => {
    setItems([...items, { name: 'Item ' + (data.length + 1) }]);
  };

  const removeItem = index => {
    const newItems = [...data];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <SafeAreaView >
      
      <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: data.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {data.name}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {/* {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${items.id}-${i}`}
                style={styles.star}
                // name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))} */}
            {/* <Text>{product.ratings}</Text> */}
          </View>
          <Text style={styles.price}>
            from ${data.price}
            {/* {product.oldPrice && (
              <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
            )} */}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        {/* <QuantitySelector
          quantity={cartProduct.quantity}
          setQuantity={updateQuantity}
        /> */}
      </View>
    </View>
    <Navbar />
  
    </SafeAreaView>
    

   
  );
};
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  quantityContainer: {
    margin: 5,
  },
});



export default Cart;
