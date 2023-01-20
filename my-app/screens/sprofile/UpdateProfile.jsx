import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Field from '../login/field'

const UpdateProfile = () => {
    const [name,setName]=useState("")
    const [adress,setAdress]=useState("")
    const [state,setState] = useState("")
    const [image,setImage] = useState("")
    const [city,setCity] = useState("")
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.title}>UpdteProfile</Text>
      <Field
            placeholder="Title"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />
           <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setAdress(text)}
          />
           <Field
            placeholder=""
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setState(text)}
          />
           <Field
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setCity(text)}
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
                  <Text style={styles.interactButtonText}>Update </Text>
        </TouchableOpacity>
    </SafeAreaView >
  )
}

export default UpdateProfile

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




