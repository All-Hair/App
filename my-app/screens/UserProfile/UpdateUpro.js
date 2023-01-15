import { SafeAreaView, StyleSheet, Text, View, Dimensions, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Field from './field';
import Btn from '../login/button';
import client from '../../api/client';

const UpdateUpro = ({navigation,route}) => {
  const {users}=route.params
  console.log(route.params,'-----');
  // console.log(users,'000000000000');
  // const [update,setUpdate]=useState()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [adress ,setAdress] = useState("")
  const [gender , setGender] = useState("")
  const [image,setImage]=useState("")
  const [phone,setPhone] = useState("")
const form = {
  name,email,adress,gender,image,phone
}
console.log(form,'-------------------------------–––-----------------------–––----------–––––––––––––––––');
//  console.log(update,',,,,,,,,,,,,,,');
  const { width, height } = Dimensions.get('window');

const handeleSubmit = async()=>{
  try{
    await client.put(`/user/update/${users.id}`,form)
    navigation.navigate('')
  }
  catch(error){
   console.log(error);
  }
   
}
  return (
    <SafeAreaView
    >
      <View    style={{
        alignItems: 'center',
        // width: width,
        // height: height,
        // marginTop: '20%',
      }}
   >

   
      <Text>Update User profile</Text>

      <Button title='update' onPress={handeleSubmit}/>
      <Field
        placeholder="Name"
        defaultValue={users.name}
        onChangeText={(text) => setName(text)}
        // secureTextEntry={true}
      />
      <Field
        placeholder="Email"
        defaultValue={users.email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Adress"
        defaultValue={users.adress}
        onChangeText={(text) => setAdress(text)}
      />
            <Field
        placeholder="gender"
        defaultValue={users.gender}
        onChangeText={(text) => setGender(text)}
      />
            <Field
        placeholder="image"
        defaultValue={users.image}
        onChangeText={(text) => setImage(text)}

      />
           <Field
        placeholder="image"
        defaultValue={users.phone}
        onChangeText={(text) => setPhone(text)}

      />
</View>
<Navbar/>
    </SafeAreaView>
  );
};

export default UpdateUpro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontFamily: '',
    color: '#52575D',
  },
});
