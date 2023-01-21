import React from 'react';
import { TextInput ,Dimensions} from 'react-native';
// import DropShadow from "react-native-drop-shadow";
import { black } from './constants';
const { width, height } = Dimensions.get('window');


const Field = (props) => {
  return (
    <TextInput
      {...props}
      
      style={{
        borderRadius: 10,
        color: black,
        paddingHorizontal: 18,
        width:width - 100,
        backgroundColor: 'white',
        borderColor: '#CCC9C0',
        borderWidth: 1,
        marginTop:14,
        
        // marginVertical: 30,
        height: 50,
        shadowColor: "#000",
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
