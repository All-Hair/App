import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Field from '../login/field'
import client from '../../api/client'
import * as ImagePicker from "expo-image-picker";
import { Avatar } from 'native-base';
const UpdateProfile = ({navigation,route}) => {
     const {user}=route.params
    console.log("🚀 ~ file: UpdateProfile.jsx:7 ~ UpdateProfile ~ saloon")
    const [name,setName]=useState(user.name)
    const [adress,setAdress]=useState(user.adress)
    const [state,setState] = useState(user.state)
    const [image, setImage] = useState(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU"
    );
  
    const [city,setCity] = useState(user.city)
    const form = {name,adress,state,city,image}
    console.log(image,"==========================");
    console.log(form,"=====================================");
    const handleSubmit =async()=>{
       const req = await client.put(`/saloon/update/${user.id}`,form)
    // navigation.navigate('Sprofiles')

    }
   
console.log(user.id,"==");
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

 


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Update Profile</Text>
      <TouchableOpacity onPress={pickImage}>
            {image ? (
              <Avatar
                bottom={100}
                bg="lightBlue.400"
                size={100}
                borderRadius={100}
                source={{ uri: image }}
                alt="Alternate Text"
              ></Avatar>
            ) : (
              <Avatar
                borderColor={"black"}
                borderWidth={1}
                bottom={100}
                size={100}
                borderRadius={100}
                source={{
                  uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }}
                alt="Alternate Text"
              />
            )}
          </TouchableOpacity>
      <Field
            placeholder="Title"
            value={name}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />
           <Field
            placeholder="Email"
            value={adress}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setAdress(text)}
          />
           <Field
            placeholder=""
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
         
      
    </View>
         {/* <Button title='Add' style={styles.interactButtonText} onPress={()=>{AddPost()}} />  */}
         <TouchableOpacity style={styles.interactButton} onPress={()=>{handleSubmit()}}>
                  <Text style={styles.interactButtonText} >Update </Text>
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
        top:-30
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
            top:-50,
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




