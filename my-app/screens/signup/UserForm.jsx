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

const UserForm = ({ navigation , changeForm, uform ,setUform} )=> {

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [adress, setAdress] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [image, setImage] = useState("");

  return (
    <View>
      <View>
        <SwitchSelector
          initial={0}
          onPress={(value) => changeForm({gender:value})}
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
        value={uform.name}
        onChangeText={(text) => changeForm({name:text})}
        placeholder="Enter your name"
        secureTextEntry={false}
      />
      <Field
        value={uform.phone}
        onChangeText={(text) => changeForm({phone:text})}
        placeholder="Enter your phone number"
        keyboardType={'phone-pad'}
        secureTextEntry={false}
      />
      <Field
        value={uform.adress}
        onChangeText={(text) => changeForm({adress:text})}
        placeholder="Enter your adress"
        secureTextEntry={false}
      />
      <Field
        value={uform.image}
        onChangeText={(text) => changeForm({image:text})}
        placeholder="Enter your image kifkif tetbadel"
        secureTextEntry={false}
      />
    </View>
  );
};

export default UserForm;
