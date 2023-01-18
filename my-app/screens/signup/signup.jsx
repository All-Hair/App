import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import { auth } from "../../firebase";
import SwitchSelector from "react-native-switch-selector";
import UserForm from "./UserForm.jsx";
import SaloonForm from "./SaloonForm.jsx";
import client from "../../api/client";
import axios from "axios";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [checkP, setCheckP] = useState(true);
  // const [form, setForm] = useState({});

  const [userType, setUserType] = useState("user");
  const [show, setShow] = useState(false);
  const [cont, setCont] = useState("");
  const [uform, setUform] = useState({});
  const [sform, setSform] = useState({});

 
  
  const changeForm = (element) => {
    setUform({ ...uform, ...element });
  };
  const changeSForm = (element) => {
    setSform({ ...sform, ...element });
  };
  

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const res = userCredentials.user.email;
         console.log("🚀 ~ file: signup.jsx:48 ~ .then ~ res", res)
         registerToDB(res)
      })
      .catch((error) => alert(error.message));
  };


  const registerToDB = async (res) => {
    // console.log("🚀 ~ file: signup.jsx:56 ~ registerToDB ~ email", res)
    
    try {
      // if (userType == "user") {
        console.log("🚀 ~ file: signup.jsx:59 ~ registerToDB ~ email====================================", res)
        await axios.post('http://172.20.10.9:5000/user',res );
      
       
      // } else {
      //   const req = await client.post("/saloon/add",  res );
      //   console.log(req.data);
      // }
    } catch (error) {
      console.log("🚀 ~ file: signup.jsx:69 ~ registerToDB ~ error", error)
      console.log(error);
    }
  };

 

  // const x =async (email)=> {
//   try {
//     await client.post('/user/',email)
//     console.log("🚀 ~ file: signup.jsx:81 ~ x ~ email", email)
    
//      // console.log("🚀 ~ file: home.jsx:56 ~ addUserTodb ~ data", data)
//     }catch(error){
//      // console.log("🚀 ~ file: home.jsx:56 ~ addUserTodb ~ error", error)
     
//     }
// }

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
              paddingTop: 60,
            }}
          >
            Register
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
          <ScrollView>
            <Field
              placeholder="Enter your Email"
              value={email}
              keyboardType={"email-address"}
              onChangeText={(text) => setEmail(text)}
            />

            <Field
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
              secureTextEntry={true}
            />
            <Field
              value={secondPassword}
              onChangeText={(text) => setSecondPassword(text)}
              placeholder="Enter your Password again"
              secureTextEntry={true}
            />
            {!checkP ? (
              <Text
                style={{
                  alignItems: "flex-end",
                  width: "78%",
                  color: "red",
                }}
              >
                check your password
              </Text>
            ) : (
              <Text></Text>
            )}
            {userType === "user" ? (
              <UserForm
                changeForm={changeForm}
                uform={uform}
                setUform={setUform}
              />
            ) : (
              <SaloonForm changeSForm={changeSForm} sform={sform} />
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            ></View>
          </ScrollView>
          <View
            style={{
              alignItems: "center",
              width: "78%",
              marginBottom: "20%",
            }}
          >
            <Btn
              textColor="white"
              bgColor={primary}
              btnLabel="Register"
              Press={() => {
                if (password !== secondPassword) {
                  setCheckP(false);
                } else {
                  setCheckP(true);

                  registerToDB();
                  handleSignUp();
                }
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
