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
import { Button } from "native-base";
import Btn from "./button.jsx";

import * as ImagePicker from "expo-image-picker";
let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/df2tk0rvs/upload";

const ImageJS = ({ navigation, changeForm, uform }) => {
  const [selectedImage, setSelectedImage] = useState("");
  //allows user to upload a photo

  //asks phone for permission to access photos

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    //this tells the application to give an alert if someone doesn't allow //permission.  It will return to the previous screen.

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    //This gets image from phone

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],

      //We need the image to be base64 in order to be formatted for Cloudinary

      base64: true,
    });

    //this just returns the user to the previous page if they click "cancel"

    if (pickerResult.cancelled === true) {
      return;
    }

    //sets image from imagePicker to SelectedImage.
    //This is if you are using hooks. The hook for this I have set up as:
    //[selectedImage, setSelectedImage] = useState("").  If you're using //anclass component you can use setState here.  This file format will be
    //a file path to where the image is saved.

    setSelectedImage({ localUri: pickerResult.assets[0].uri });

    //***IMPORTANT*** This step is necessary.  It converts image from //file path format that imagePicker creates, into a form that cloudinary //requires.

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    // Here we need to include your Cloudinary upload preset with can be //found in your Cloudinary dashboard.

    let data = {
      file: base64Img,
      upload_preset: allHair,
    };

    //sends photo to cloudinary
    //**I initially tried using an axios request but it did NOT work** I was
    //not able to get this to work until I changed it to a fetch request.

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();

        //Here I'm using another hook to set State for the photo that we get back //from Cloudinary

        setPhoto(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <TouchableOpacity>
        <Btn
          textColor="gray"
          bgColor="white"
          btnLabel="add picture"
          Press={openImagePickerAsync}
        />
      </TouchableOpacity>
      <Field
        value={uform.image}
        onChangeText={(text) => changeForm({ image: text })}
        placeholder="Enter your image kifkif tetbadel"
        secureTextEntry={false}
      />
          <View>
          <Btn
textColor="gray"
bgColor="white"
btnLabel="add picture"
Press={()=>{console.log(selectedImage);}}
/>
<Image
           source={{
            uri: selectedImage["localUri"] ,
          }}
            />


          <Image

              source={require("my-app/assets/profilbackground.png")}
            />
          </View>
    </View>
  );
};


export default ImageJS;
