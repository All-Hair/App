

  import React ,{useState,} from "react";
  import { View, Text, TouchableOpacity, Image } from "react-native";
  import Background from "./background.jsx";
  import Btn from "./button.jsx";
  import { primary } from "./constants.jsx";
  import Field from "./field.jsx";
  import { auth,firebase } from '../../firebase';
  
  
  
  
  const Forgotpassword = ({navigation}) => {
     const [email,setEmail]=useState('');
     
  
  const forgotpassword =()=>{
   firebase.auth().sendPasswordResetEmail(email)
   .then(()=>{ alert("password reset email sent") }).catch((error)=>{alert(error);})
   


  }
  
  
    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(user => {
    //     if (user) {
   
    //     }
    //   })
  
    //   return unsubscribe
    // }, [])
   
  
  
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
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 20,
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
            
            <Btn
              textColor="grey"
              bgColor={primary}
              btnLabel="Change "
              Press={()=>{forgotpassword().then(navigation.navigate("Login"))
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
  
  export default Forgotpassword;
  