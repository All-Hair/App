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

// const cloudinary = require('cloudinary').v2;
// // import cloudinary from 'cloudinary';


// cloudinary.config({
//   cloud_name: 'df2tk0rvs',
//   api_key: '827153953378228',
//   api_secret: '2owtgQGqST9_bfJRWGtMhUgL7hI'
// });


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
    <View 
    style={{alignItems: "center"  }}
    >
      <TouchableOpacity>
        <Btn
          textColor="gray"
          bgColor="white"
          btnLabel="add picture"
          Press={openImagePickerAsync}
        />

{/* <Btn
          textColor="gray"
          bgColor="white"
          btnLabel="log pic"
          Press={() => {
            console.log(selectedImage);
          }}
        /> */}


      </TouchableOpacity>

      <View>

        <Image 
                      style={{alignItems: "center", width: 100, height: 100  }}
                      source={{ 
            uri: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
          }}
        />
      </View>


    </View>
  );
};

export default ImageJS;
