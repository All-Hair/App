import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from 'react-native-vector-icons';

export default function Detail({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: '#d9d5ca',
        height: '100%',
      }}
    >
      <View
        style={{
          paddingHorizontal: 40,
          backgroundColor: '#FFF',
          height: '50%',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: '50%' }}
          >
            <Entypo name="chevron-left" size={24} color="#044244" />
          </TouchableOpacity>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Entypo name="dots-two-vertical" size={24} color="#044244" />
          </View>
        </View>
      </View>
    </View>
  );
}
