import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

import Field from "./field.jsx";
import { auth } from "../../firebase";
import SwitchSelector from "react-native-switch-selector";

const imageMale = require("../../assets/male.png");
const imageFemale = require("../../assets/female.png");

const UserForm = ({ navigation , uform ,setUform} )=> {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  return (
    <View>
      <View>
        <SwitchSelector
          initial={0}
          onPress={(value) => setUform({gender:value})}
          textColor="gray"
          selectedColor="white"
          buttonColor="gray"
          borderColor="gray"
          hasPadding
          options={[
            { label: "male", value: "male", imageIcon: imageMale },
            { label: "female", value: "female", imageIcon: imageFemale },
          ]}
        />
      </View>

      <Field
        value={name}
        onChangeText={(text) =>  setUform({name:text})}
        placeholder="Enter your name"
        secureTextEntry={true}
      />
      <Field
        value={phone}
        onChangeText={(text) => setUform({phone:text})}
        placeholder="Enter your phone number"
        secureTextEntry={true}
      />
      <Field
        value={adress}
        onChangeText={(text) => setUform({adress:text})}
        placeholder="Enter your adress"
        secureTextEntry={true}
      />
      <Field
        value={image}
        onChangeText={(text) => setImage(text)}
        placeholder="Enter your image kifkif tetbadel"
        secureTextEntry={true}
      />
    </View>
  );
};

export default UserForm;
