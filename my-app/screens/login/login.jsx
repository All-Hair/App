import React, { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";

import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";
import { MaterialIcons } from "@expo/vector-icons";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import client from "../../api/client";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isUser, setIsUser] =useState(true)
  const [userType, setUserType] = useState("user");

  // const { width, height } = Dimensions.get('window');
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // console.log(password)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const loginToDB = async () => {
    try {
      if (userType == "user") {
        const req = await client.get(`/user/getone/${email}`);
        console.log(req.data);
      } else {
        const req = await client.get(`/saloon/getone/${email}`);
        console.log(req.data);
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
      })
      .catch((error) => alert(error.message));
  };

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
              marginBottom: 50,
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
            onChangeText={(text) => setEmail(text)}
          />
          <Field
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
          />

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
            Press={loginToDB}
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
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Login;
