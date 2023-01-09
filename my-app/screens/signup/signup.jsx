import React, { useState } from "react";
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


const Signup = ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [checkP, setCheckP] = useState(true);
  const [form, setForm] = useState({});

  const [userType, setUserType] = useState("user");
  const [show, setShow] = useState(false);
  const [cont, setCont] = useState('');

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
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

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
                { label: "user", value: "user" }, //, imageIcon: images.feminino const imagesFeminino = require('./path_to/assets/img/feminino.png')
                { label: "saloon", value: "saloon" }, //, imageIcon: images.masculino const imagesMasculino = require('./path_to/assets/img/masculino.png')
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
            {userType === "user" ? <UserForm /> : <SaloonForm />}

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
