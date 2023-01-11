import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";

  import { Button } from "react-native";
  import client from "../../api/client";
  
  const dummydata =[
    {
      id: '1',
      name: 'Beauty center abracadabra',
      adress: "ariana ",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3zhKczcMK7Fg-TJdrUc30mLPuRN3IIYq_bsoRNRkTjKHFlN9Mur3M8lJWzpgSCkBQKY&usqp=CAU',
    },
    {
      id: '2',
      name: 'Salma beauty',
      adress: "sousse",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc9pUsubwM5muffypQN2FSEJrDmyf8aucNXTeRdqREdwBnTAdS6L4Y0aEB8sI1bAdjIk&usqp=CAU',
    },
    {
      id: '3',
      name: 'ANIS Barber shop',
      adress: "Tunis",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_hXafgTbtnFYTIC8yNLKJIG-ewa8cCBHtQ&usqp=CAU',
    },
  ]
  const Saloon = ({ navigation }) => {
    const [item, setItem] = useState(dummydata);
    console.log(item, "<-------->");
  
    const [data, setData] = useState([]);
  // function to get data 
  
  const getData = async ()=>{
    try {
      const req = await client.get("/saloon/getAll")
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
      <ScrollView>
        
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              marginVertical: 20,
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            Saloon
          </Text>
          {item.map((e, i) => {
            console.log("<<<<<<<<<", i);
            return (
              <View style={styles.item} key={i}>
                <Image style={styles.itemImage} source={{ uri: e.image }} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{e.name} </Text>
                  <Text style={styles.itemName}>{e.adress}</Text>
                </View>
                <Button
                  title="More"
                  onPress={() => {
                    navigation.navigate("Sprofile"), e.id;
                  }}
                />
              </View>
            );
          })}    
      </ScrollView>
    );
  };
  
  export default Saloon;
  
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
    },
  });
  