import React from 'react';
import {TextInput} from 'react-native';
import {black} from './constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: black,  paddingHorizontal: 18, width: '70%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 20 , height:40}}
      ></TextInput>
  );
};

export default Field;