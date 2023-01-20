import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Field from '../login/field'
import client from '../../api/client'

const UpdateProfile = ({navigation,route}) => {
    const {saloon}=route.params
    console.log("🚀 ~ file: UpdateProfile.jsx:7 ~ UpdateProfile ~ saloon", saloon)
    const [name,setName]=useState(saloon?.name)
    const [adress,setAdress]=useState(saloon?.adress)
    const [state,setState] = useState(saloon?.state)
    const [image,setImage] = useState(saloon?.image)
    const [city,setCity] = useState(saloon?.city)
    const form = {name,adress,state,image,city}
    const handleSubmit =async()=>{
       const req = await client.put(`/saloon/update/${saloon.id}`,form)
    navigation.navigate('Sprofile')

    }
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.title}>UpdteProfile</Text>
      <Field
            // placeholder="Title"
            value={name}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />
           <Field
            // placeholder="Email"
            value={adress}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setAdress(text)}
          />
           <Field
            // placeholder=""
            value={state}

            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setState(text)}
          />
           <Field
            value={city}

            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setCity(text)}
          />
           <Field
            value={image}
            placeholder="Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setImage(text)}
          />
      
    </View>
         {/* <Button title='Add' style={styles.interactButtonText} onPress={()=>{AddPost()}} />  */}
         <TouchableOpacity style={styles.interactButton} onPress={()=>{handleSubmit()}}>
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




