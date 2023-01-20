import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
import client from '../../api/client'
import Field from '../login/field'
import Btn from '../login/button'
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
      <Field
            placeholder="Title"
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
            placeholder=""
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
      
    </View>
         {/* <Button title='Add' style={styles.interactButtonText} onPress={()=>{AddPost()}} />  */}
         <TouchableOpacity style={styles.interactButton} onPress={()=>{AddPost()}}>
                  <Text style={styles.interactButtonText}>Add Post </Text>
        </TouchableOpacity>
    </SafeAreaView >
  )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        top:-60
      },
      input:{
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    button :{
        
    },
    title:{
        top:-150,
        fontSize: 35,
        color: '#000000',
        left: 42,
        fontWeight: 'bold',
        marginRight:60

    },
    interactButton: {
        // flex: 1,
        // flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCC9C0',
        margin: 9,
        borderRadius: 10,
        shadowOpacity: 0.7,
            shadowRadius: 7.49,
            shadowColor: "#000",
             width: 300,
             height:40,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            top:-250,
            left:45,
            elevation: 6,
      },
    interactButtonText: {
    
        borderRadius: 10,
        
        textAlign:"center",  
        color: '#FFF',
        fontSize: 18,
        paddingVertical: 6,
      },
      
})