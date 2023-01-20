import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
import client from '../../api/client'
import Field from '../login/field'
const AddPost = ({navigation}) => {
    const [description,setDescription] = useState("")
    const [title,setTitle] = useState("")
    const [media,setMedia] = useState("")
    const [image,setImage] = useState("")
    const form = {description,title,media,image}
 const AddPost =async()=>{
    try{
        const add = await client.post('/post/add',form)
         navigation.navigate('Sprofile')
    }
    catch(error){
     console.log(error);
    }
 }  

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.title}>AddPost</Text>
      {/* <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setTitle(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setDescription(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setMedia(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setImage(text)}} /> */}
      <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setTitle(text)}
          />
           <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setDescription(text)}
          />
           <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setMedia(text)}
          />
           <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setImage(text)}
          />
      
      <Button title='Add'onPress={()=>{AddPost()}} /> 
    </View>
    </SafeAreaView >
  )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      },
      input:{
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    },
    title:{
        top:-200,
        fontSize: 35,
        color: '#000000',
        left: 42,
        fontWeight: 'bold',
        marginRight:60

    }
})