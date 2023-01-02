import React from 'react';
import { TextInput } from 'react-native';
// import DropShadow from "react-native-drop-shadow";
import { black } from './constants';

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: black,
        paddingHorizontal: 18,
        width: '70%',
        backgroundColor: 'white',
        borderColor: '#CCC9C0',
        borderWidth: 1,
        marginVertical: 30,
        height: 70,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
      }}
    ></TextInput>
  );
};

export default Field;
