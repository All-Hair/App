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



const SaloonForm = ({navigation , changeSForm , sform}) => {









  return (
<View>
<View>
        <SwitchSelector
          initial={0}
          onPress={(value) => changeSForm({gender:value})}
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
<Field  value={sform.name} onChangeText={text=>changeSForm({name:text})} placeholder="Enter the saloon name"  />
<Field  value={sform.adress} onChangeText={text=>changeSForm({adress:text})} placeholder="Enter the saloon adress"  />
<Field  value={sform.city} onChangeText={text=>changeSForm({city:text})} placeholder="Enter the saloon city"  />
<Field  value={sform.type} onChangeText={text=>changeSForm({type:text})} placeholder="Enter the saloon type"  />
<Field  value={sform.description} onChangeText={text=>changeSForm({description:text})} placeholder="Enter the saloon description"  
          multiline={true}
 />
<Field  value={sform.image} onChangeText={text=>changeSForm({image:text})} placeholder="Enter the saloon image"  />
<Field  value={sform.home_service} onChangeText={text=>changeSForm({home_service:text})} placeholder="Enter the saloon home_service"  />

</View>
  );
};

export default SaloonForm;
