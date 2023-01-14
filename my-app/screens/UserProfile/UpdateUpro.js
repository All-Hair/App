import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Field from './field';
import Btn from '../login/button';
import client from '../../api/client';

const UpdateUpro = ({navigation,route}) => {
  const updatePro=route.params.users
  const [update,setUpdate]=useState(updatePro)

  const { width, height } = Dimensions.get('window');

const handeleSubmit = async()=>{
  try{
     const updated = await client.update()
  }catch(error){
   console.log(error);
  }
   
}
  return (
    <SafeAreaView
    >
      <View    style={{
        alignItems: 'center',
        width: width,
        height: height,
        marginTop: '20%',
      }}
   >

   
      <Text>Update User profile</Text>
      <Field
        placeholder="Name"
        value={updatePro.name}
        onChangeText={(text) => setName(text)}
        // secureTextEntry={true}
      />
      <Field
        placeholder="Email"
        value={updatePro.email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={updatePro.adress}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={updatePro.gender}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={updatePro.image}
        onChangeText={(text) => setEmail(text)}

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
