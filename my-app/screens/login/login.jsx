import React ,{useState,useEffect} from "react";
import { View, Text, Touchable, TouchableOpacity, Image ,Dimensions } from "react-native";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import { auth } from '../../firebase';
import { SafeAreaView } from "react-native-safe-area-context";


const {width, height} = Dimensions.get('window');


const Login = ({navigation}) => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

// console.log(password)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
      

    })

    return unsubscribe
  }, [])


const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
}

  return (
    <Background>
      <SafeAreaView
        style={{ alignItems: "center", width: width,height:height, backgroundColor: "#CCC9C0" }}
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
            height: height,
            width: width,
            borderTopLeftRadius: 130,
            // borderTopRightRadius:130,
            paddingTop: 100,
            // paddingRight: 40,
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
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              paddingTop: 60,
            }}
          >
            Login to your account
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgotpassword")}
            >
              <Text
                style={{ color: "grey", fontWeight: "bold", fontSize: 16 }}
              >
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="grey"
            bgColor={primary}
            btnLabel="Login"
            Press={handleLogin } 
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              alignItems: "center",
              borderRadius: 100,
              width: 150,
              paddingVertical: 4,
              marginVertical: 10,
            }}
          >
            
              
              <Image
                source={require("my-app/assets/281764-removebg-preview.png")}
                style={{ width: 30, height: 30 }}
              />
           
          </TouchableOpacity>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
            >
              <Text
                style={{ color: primary, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Login;
