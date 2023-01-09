import React ,{useState,} from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";
import { auth } from '../../firebase';
import SwitchSelector from "react-native-switch-selector";

const imageMale = require("../../assets/male.png");
const imageFemale = require("../../assets/female.png");



const SaloonForm = ({navigation}) => {
   const [name,setName]=useState('');
   const [adress,setAdress]=useState('');
   const [gender, setGender] = useState("");








  return (
<View>
<View>
        <SwitchSelector
          initial={0}
          onPress={(value) => setGender(value)}
          textColor="gray"
          selectedColor="white"
          buttonColor="gray"
          borderColor="gray"
          hasPadding
          options={[
            { label: "Male", value: "male", imageIcon: imageMale },
            { label: "Mixed", value: "mixed" },
            { label: "Female", value: "female", imageIcon: imageFemale },
          ]}
        />
      </View>
<Field  value={name} onChangeText={text=>setName(text)} placeholder="Enter the saloon name" secureTextEntry={true} />
<Field  value={adress} onChangeText={text=>setAdress(text)} placeholder="Enter the saloon name" secureTextEntry={true} />

</View>
  );
};

export default SaloonForm;
