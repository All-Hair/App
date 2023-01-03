import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Btn ({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
        paddingVertical: 5,
        marginVertical: 10,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 5,


      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
     
      </Text>
    </TouchableOpacity>
  );
}