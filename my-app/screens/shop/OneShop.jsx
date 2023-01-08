import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";

const OneShop = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          // marginVertical: 20,
          marginTop: 50,
          alignSelf: "center",
        }}
      >
        PRODUCT DETAILS{" "}
      </Text>
       
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU",
          }}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Salvator </Text>
          <Text style={styles.itemName}>80 DT </Text>
        </View>
          <TouchableOpacity
           onPress={() => {
          navigation.navigate('Cart');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
      </View>
      <Navbar navigation={navigation}/>
    </SafeAreaView>
  );
};

export default OneShop;

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
    color: "#888",
  },
  cartItemRemove: {
    alignSelf: "stretch",
  },
  item: {
    flexDirection: 'column',
    alignItems: "center",
    padding: 100,
    // marginBottom: 10,
    backgroundColor: "#fff",
    width: 450,
    height: 600,
    borderRadius:70,
    top:30,
    // left:20
    right:15


  },
  itemImage: {
    width: 200,
    height: 300,
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
    backgroundColor: '#CCC9C0',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    top: 40,

  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginTop:1
  },
});
