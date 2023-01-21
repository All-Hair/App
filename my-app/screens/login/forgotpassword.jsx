

  import React ,{useState,} from "react";
  import { View, Text, TouchableOpacity, Image } from "react-native";
  import Background from "./background.jsx";
  import Btn from "./button.jsx";
  import { primary } from "./constants.jsx";
  import Field from "./field.jsx";
  
  import {sendPasswordResetEmail} from 'firebase/auth'
  import { auth } from '../../firebase';
  
  
  const Forgotpassword = ({navigation}) => {

     const [email,setEmail]=useState('');
  
  
  
    return (
      <Background>
        <View
          style={{ alignItems: "center", width: 460, backgroundColor: "#CCC9C0" }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 64,
              fontWeight: "bold",
              marginVertical: 20,
              paddingBottom: 90,
            }}
          ></Text>
          <View
            style={{
              backgroundColor: "white",
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              // borderTopEndRadius:130,
              paddingTop: 100,
              paddingRight: 40,
              alignItems: "center",
            }}
          >
            <Image
              source={require("my-app/assets/logo-removebg-preview.png")}
              style={{ width: 170, height: 170, marginTop: -285 }}
            />
  
            <Text
              style={{
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 60,
                paddingTop: 60,
              }}
            >
              Change Password 
            </Text>
            <Field
              placeholder="Put Your Email "
              value={email}
              keyboardType={"email-address"}
              onChangeText={text=>setEmail(text)}
            />
            
            <TouchableOpacity onPress={()=>{resetPassword()}}
    
      style={{
        backgroundColor: '#CCC9C0',
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
        paddingVertical: 6,
        marginVertical: 60,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 5,


      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
         
      Change
      </Text>
    </TouchableOpacity>
            
            
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              
             
            </View>
          </View>
        </View>
      </Background>
    );
  };
  
  export default Forgotpassword;
  