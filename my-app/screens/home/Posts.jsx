import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import Videos from '../videoss/videos';
export default function Posts(props) {
  const [liked, setLike] = useState(false);
  const { name, profile,  onPress } = props;

  const onLike = () => {
    setLike(!liked);
  };
  return (
    <View style={{top:30}}>
      <View
        style={{
          flexDirection: 'row',
          
          alignItems: 'center',
          bottom:10
        }}
      >
        <View
          style={{
            width: '20%',
          }}
        >
          <Image
            source={profile}
            style={{
              width: 45,
              height: 45,
              borderRadius: 13,
            }}
          />
        </View>
        <View style={{ width: '60%' }}>
          <Text style={{ fontSize: 14, color: '#d9d5ca' }}>{name}</Text>
          <Text style={{ fontSize: 12 }}>2 mins ago</Text>
        </View>
        <View style={{ width: '20%', alignItems: 'flex-end' }}>
          {/* <Entypo name="sound-mix" size={20} /> */}
        </View>
      </View>
      < Videos  url={props.url}/>

      <View
        style={{
          
          width: '100%',
          paddingTop:10,
          flex: 1,
         flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            {/* <TouchableOpacity onPress={onPress}
            style={{
              marginBottom:20,
              borderRadius:5,
              padding:5,
              backgroundColor:'#e8e8e8'
            }}>
              <Entypo name='forward'
              color='#044244'
              size={20}/>

            </TouchableOpacity> */}
            <TouchableOpacity onPress={onLike}
            style={{
              // marginBottom:20,
              borderRadius:5,
              padding:5,
              backgroundColor:'#e8e8e8',
              marginLeft:270,
              // marginRight:20
              
            }}>
              <Entypo name={liked === true?'heart':'heart-outlined'}
              color={liked ===true ? 'red' : '#044244'}
              size={20}/>

            </TouchableOpacity>
          </View>
      
      </View>
    </View>
  );
}
