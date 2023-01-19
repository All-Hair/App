import { SafeAreaView, StyleSheet, Text, View, Dimensions, Button,  } from 'react-native';
import React, { useState ,useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Field from './field';
import Btn from '../login/button';
import client from '../../api/client';

const UpdateUpro = ({navigation,route}) => {
  const {users}=route.params
  const [name,setName] = useState(users?.name)
  const [email,setEmail] = useState(users?.email)
  const [adress ,setAdress] = useState(users?.adress)
  const [gender , setGender] = useState(users?.gender)
  const [image,setImage]=useState(users?.image)
  const [phone,setPhone] = useState(users?.phone)
 const form = {
  name,email,adress,gender,image,phone
 }
console.log(form,'-------------------------------–––-----------------------–––----------–––––––––––––––––');
//  console.log(update,',,,,,,,,,,,,,,');
  const { width, height } = Dimensions.get('window');

const handeleSubmit = async()=>{
  try{
    await client.put(`/user/update/${users.id}`,form)
    navigation.navigate('Uprofile')
    
  }
  catch(error){
   console.log(error.message);
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
        value={name}
        onChangeText={(text) => setName(text)}
        // secureTextEntry={true}
      />
      <Field
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Adress"
        value={adress}
        onChangeText={(text) => setAdress(text)}
      />
            <Field
        placeholder="gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
            <Field
        placeholder="image"
        value={image}
        onChangeText={(text) => setImage(text)}

      />
           <Field
        placeholder="image"
        value={phone}
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
