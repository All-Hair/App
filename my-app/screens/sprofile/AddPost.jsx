import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
const AddPost = () => {
    const [content,setConent] = useState("")
//  const AddPost =async()=>{
//     try{
//       await      
//     }
//     catch(error){
//      console.log(error);
//     }
//  }  

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles}>AddPost</Text>
      <TextInput placeholder='content'  style={styles.input} onChange={(text)=>{setConent(text),console.log(text);}} />
      <Button title='Add' /> 
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