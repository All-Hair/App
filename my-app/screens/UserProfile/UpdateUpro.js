import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Field from './field';
import Btn from '../login/button';

const UpdateUpro = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');

  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView
    >
      <View    style={{
        alignItems: 'center',
        width: width,
        height: height,
        marginTop: '20%',
      }}
   >

   
      <Text>Update User profile</Text>
      <Field
        placeholder="Name"
        value={Name}
        onChangeText={(text) => setName(text)}
        // secureTextEntry={true}
      />
      <Field
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
            <Field
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
</View>
<Navbar/>
    </SafeAreaView>
  );
};

export default UpdateUpro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontFamily: '',
    color: '#52575D',
  },
});
