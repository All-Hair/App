import React from 'react';
import {TextInput} from 'react-native'
import DropShadow from "react-native-drop-shadow";
import {black} from './constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 10, color: black,  paddingHorizontal: 18, width: '70%', backgroundColor: 'white',borderColor:'#CCC9C0',borderWidth:1,shadowColor:'#CCC9C0' , marginVertical: 30 , height:50}}
      ></TextInput>
  );
};

export default Field;