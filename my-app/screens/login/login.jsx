import React, { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";

import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";

import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import client from "../../api/client";
import { AntDesign } from '@expo/vector-icons'; 

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {localStoreData} from '../../components/localStorage'

import AsyncStorage from '@react-native-async-storage/async-storage';

const localStoreData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }
  // const  getAllKeys = async () => {
  //   let keys = []
  //   try {
  //     keys = await AsyncStorage.getAllKeys()
  //   } catch(e) {
  //     // read key error
  //   }
  //   // console.log(keys)
  //   console.log("🚀 ~ file: login.jsx:38 ~ getAllKeys= ~ keys", keys)
  // }
//  const getMultiple = async () => {

//     let values
//     try {
//       values = await AsyncStorage.multiGet(['user', 'key'])
//     } catch(e) {
//       // read error
//     }
//     // console.log(values)
//     console.log("🚀 ~ file: login.jsx:49 ~ getMultiple ~ values", values)
  
//     // example console.log output:
//     // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
//   }
  // const localStoreID = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem('id', jsonValue)
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // }

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [checkEmail, setCheckEmail] = useState(true);

  const [show, setShow] =useState(true)
  
//  const [users,setUsers] = useState("")
  // const { width, height } = Dimensions.get('window');
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // console.log(password)
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home",{user:user});
       
        // setUsers(user)
        // storeUser(user)
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        // localStoreData({user:user})
      }
      // getAllKeys()
      // getMultiple()
    });

    return unsubscribe;
  }, []);

  const loginToDB = async () => {
    try {
      if (userType == "user") {
        const req = await client.get(`/user/getone/${email}`);
        console.log(req.data);
        console.log("🚀 ~ file: login.jsx:67 ~ loginToDB ~ req.data", req.data)
        if (req.data == "Not found!") {
          console.log("not existing user !!!!");
          setCheckEmail(false);
        } else {
          setCheckEmail(true);
          handleLogin();
          localStoreData({role:'user'})
        }
      } else {
        const req = await client.get(`/saloon/getone/${email}`);
        console.log(req.data);
        if (req.data == "Not found!") {
          console.log("not existing saloon !");
          setCheckEmail(false);
        } else {
          setCheckEmail(true);
          handleLogin();
          localStoreData({role:'saloon'})
          console.log('-->req.data--> ' + req.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(userCredentials);
        console.log("Logged in with:", user.email);
        // localStoreID({email:user.email})
      })
      .catch((error) => alert(error.message));
  };
  //  const  storeUser = async (value) => {
  //   try {
  //     console.log("1",value);
  //     await AsynStorage.setItem("user", JSON.stringify(value));
  //     console.log();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
 

  return (
    <Background>
      <SafeAreaView
        style={{
          alignItems: "center",
          width: windowWidth,
          height: windowHeight,
          backgroundColor: "#CCC9C0",
        }}
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
            height: windowHeight,
            width: windowWidth,
            borderTopLeftRadius: 130,
            // borderTopRightRadius:130,

            alignItems: "center",
          }}
        >
          <Image
            source={require("my-app/assets/logo-removebg-preview.png")}
            style={{ width: 170, height: 170, marginTop: -200 }}
          />

          <Text
            style={{
              color: "grey",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 30,
              paddingTop: 80,
              shadowColor: "#CCC9C0",
            }}
          >
            Login to your account
          </Text>

          <View
            style={{
              alignItems: "flex-end",
              width: "60%",
              paddingRight: 20,
              marginBottom: 15,
            }}
          >
            <SwitchSelector
              initial={0}
              onPress={(value) => {
                setUserType(value);
                console.log(userType);
              }}
              textColor="gray" //'#7a44cf'
              selectedColor="white"
              buttonColor="gray"
              borderColor="black"
              hasPadding
              options={[
                { label: "user", value: "user" },
                { label: "saloon", value: "saloon" },
              ]}
            />
          </View>

          <Field
            placeholder="Email"
            value={email}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          {!checkEmail ? (
            <Text
              style={{
                alignItems: "flex-end",
                width: "78%",
                color: "red",
              }}
            >
              check your email
            </Text>
          ) : (
            <Text></Text>
          )}
          <Field
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={show}
          />
          <View style={{top:-40,left:120}}>
              <TouchableOpacity onPress={()=>{setShow(!show); setTimeout(() => { setShow(show) 
                
              }, 800); }}><AntDesign name="eyeo" size={30} color="#ccc9c0" /></ TouchableOpacity></View>
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 19,
              marginBottom: 80,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgotpassword")}
            >
              <Text style={{ color: primary, fontSize: 13, marginTop: 20 }}>
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="white"
            bgColor={primary}
            btnLabel="Login"
            Press={() => {
              loginToDB();
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
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
              marginBottom:20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{ color: primary, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom:20,
            }}
          >
            
          </View>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Login;
