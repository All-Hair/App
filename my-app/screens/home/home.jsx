import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase';
// import Shop from '../shop/shop'
import { NavigationContainer } from '@react-navigation/native';
// import  Navbar from '../../components/Navbar';
import  Navbar from '../../components/Navbar';


const Home = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };
  console.log(auth.currentUser?.email);
  return (
  
   <View style={styles.container}>
   
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={()=>{ navigation.navigate("Sprofile")}}

        style={styles.button}
      >
        <Text style={styles.buttonText}>Sprofile</Text>
     
      </TouchableOpacity>
      
      <Button title="Go to Shop" onPress={()=>navigation.navigate("Uprofile")}/>
        <Navbar />

      
        <Navbar  navigation ={navigation}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
