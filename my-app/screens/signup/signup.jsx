import React ,{useState,} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import { auth } from '../../firebase';




const Signup = ({navigation}) => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

// console.log(password)


  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
 
  //     }
  //   })

  //   return unsubscribe
  // }, [])
 
const handleSignUp = () => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
}



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
              marginBottom: 20,
              paddingTop: 60,
            }}
          >
            Register 
          </Text>
          <Field
            placeholder="Email"
            value={email}
            keyboardType={"email-address"}
            onChangeText={text=>setEmail(text)}
          />
          <Field  value={password} onChangeText={text=>setPassword(text)} placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 19,
              marginBottom: 100,
            }}
          >
           
          </View>
          <Btn
            textColor="white"
            bgColor={primary}
            btnLabel="Register"
            Press={()=>{handleSignUp()
               }}
          />
          
          
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

export default Signup;
