import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
import client from '../../api/client'
const AddPost = ({navigation}) => {
    const [description,setDescription] = useState("")
    const [title,setTitle] = useState("")
    const [media,setMedia] = useState("")
    const [image,setImage] = useState("")
    const form = {description,title,media,image}
    console.log("🚀 ~ file: AddPost.jsx:10 ~ AddPost ~ form", form)
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
      <Text style={styles}>AddPost</Text>
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setDescription(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setTitle(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setMedia(text)}} />
      <TextInput placeholder='content'  style={styles.input} onChangeText={(text)=>{setImage(text)}} />
      
      
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
        height: 40,
      margin: 12,
      borderWidth: 1,
     adding: 10,
    }
})