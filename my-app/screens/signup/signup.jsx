import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
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

// web : 1004724493628-t7ppg7i58ul4k5tvsrkaai9tj3sqgfgd.apps.googleusercontent.com
// ios : 1004724493628-cookht6lqj26lsbs3ujf22ss27829etq.apps.googleusercontent.com
// android : 
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [checkP, setCheckP] = useState(true);
  // const [form, setForm] = useState({});

  const [userType, setUserType] = useState("user");
  const [show, setShow] = useState(false);
  const [cont, setCont] = useState("");
  const [uform, setUform] = useState({gender:"male"});
  const [sform, setSform] = useState({gender:"male"});
 const [saloon,setSaloon] = useState({})
 console.log("🚀 ~ file: signup.jsx:40 ~ Signup ~ saloon", saloon)
 
  
  console.log(uform);
  console.log(sform);
 
  // console.log(password)

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {

  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const changeForm = (element) => {
    setUform({ ...uform, ...element });
  };
  const changeSForm = (element) => {
    setSform({ ...sform, ...element });
  };
  const registerToDB = async () => {
    try {
      if (userType == "user") {
        const req = await client.post("/user", { ...uform, email: email });
        console.log(req.data);
      } else {
        const req = await client.post("/saloon/add", {
          ...sform,
          email: email,
        });
        console.log(req.data);
        console.log("🚀 ~ file: signup.jsx:74 ~ registerToDB ~ req.data", req.data)
        setSaloon(req.data)
      }
    } catch (error) {
      console.log(error);
    }
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

          <KeyboardAvoidingView behavior="position" style={styles.ScrollView}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <View>
                {/* <ScrollView> */}
                <Field
                  placeholder="Enter your Email"
                  value={email}
                  keyboardType={"email-address"}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
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
                  <UserForm changeForm={changeForm} uform={uform} />
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
                {/* </ScrollView> */}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
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

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    scrollEnabled: false,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
  },
});
export default Signup;
