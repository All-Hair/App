import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Button } from "react-native";

import client from "../../api/client";


const data = [
  {
    id: "1",
    name: "Water Spray",
    price: "150 DT ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU",
  },
  {
    id: "2",
    name: "Tomp",
    price: "50 DT",
    image: "https://m.media-amazon.com/images/I/61N6De+CSdL.jpg",
  },
  {
    id: "3",
    name: "Salvator",
    price: "80 DT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU",
  },
  {
    id: "4",
    name: "Salvator",
    price: "80 DT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU",
  },
];
const Shop = ({ navigation }) => {
  const [item, setItem] = useState(data);
  // console.log(item, "<-------->");


  // function to get data 

const getData = async ()=>{
  try {
    const req = await client.get("/product")
    setItem(req.data);
    console.log(req.data);
  } catch (error) {
    console.log(error)
  }
    }

    useEffect(() => {
      getData()
      console.log("hi");
      }, []);
    
  return (
    <View>
      <SafeAreaView>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginVertical: -40,
            marginTop: 100,
            alignSelf: "center",
            bottom: 85,
          }}
        >
          shop
        </Text>
        {item.map((e, i) => {
          return (
            <View style={styles.item} key={i}>
              <Image style={styles.itemImage} source={{ uri: e.image }} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{e.name} </Text>
                <Text style={styles.itemName}>{e.price}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Slider"), e.id;
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>More</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Cart");
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Buy</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <Navbar navigation={navigation} />
      </SafeAreaView>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  cart: {
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
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
    color: "#888",
  },
  cartItemRemove: {
    alignSelf: "stretch",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 40,
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
    color: "#888",
  },
  itemAdd: {
    alignSelf: "stretch",
  },

  button: {
    marginLeft: 10,

    backgroundColor: "#CCC9C0",
    width: "23%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
