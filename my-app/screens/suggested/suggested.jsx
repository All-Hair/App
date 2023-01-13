
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

export default function Suggested({ navigation }) {


const [suggestedUsers] = useState([
    {
      name: 'Chris Hayes',
      userImg: 'https://randomuser.me/api/portraits/men/34.jpg',
      followerName: 'alice_10',
      followerCount: '2',
    },
    {
      name: 'Esther Baker',
      userImg: 'https://randomuser.me/api/portraits/women/52.jpg',
      followerName: 'katie_me',
      followerCount: '6',
    },
    {
      name: 'Gabe Hanson',
      userImg: 'https://randomuser.me/api/portraits/men/90.jpg',
      followerName: 'bryce192',
      followerCount: '7',
    },
    {
      name: 'Beverly Green',
      userImg: 'https://randomuser.me/api/portraits/women/37.jpg',
      followerName: 'steven003',
      followerCount: '3',
    },

    {
      name: 'Brandom James',
      userImg: 'https://randomuser.me/api/portraits/men/35.jpg',
      followerName: 'its.manny',
      followerCount: '4',
    },
  ]);








  return (





    <View style={styles.suggestionsView}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    
      }}
    >
      <Text style={{ fontWeight: '500' }}>Suggested for you</Text>
      <Text style={{ color: '#1e90ff', fontWeight: '500' }}>
        See all
      </Text>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 10 }}
    >
      {suggestedUsers.map((user) => (
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#dfe4ea',
            alignItems: 'center',
            marginLeft: 10,
          }}
        >
          <View style={{ width: '100%' }}>
            <Icon
              style={{ alignSelf: 'flex-end' }}
              name='clear'
              type='material'
              size={20}
            />
          </View>
          <Image
            style={{ width: 90, height: 90, borderRadius: 100 }}
            source={{
              uri: user.userImg,
            }}
          />
          <Text style={{ fontWeight: '500', marginTop: 6 }}>
            {user.name}
          </Text>
          <Text
            style={{
              maxWidth: 80,
              fontSize: 12,
              color: '#666',
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            {`Followed by ${user.followerName} and ${user.followerCount} more`}
          </Text>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#1e90ff',
              paddingVertical: 4,
              marginTop: 8,
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
                alignSelf: 'center',
              }}
            >
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={{ width: 30 }}></View>
    </ScrollView>
  </View>

             
                    
                  );
                }
                  const styles = StyleSheet.create({
  container: {},
  bottomBar: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyView: {
    paddingVertical: 4,
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyHolder: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  storyUserTouchable: {
    position: 'relative',
  },
  storyUsernameText: {
    marginTop: 4,
  },
  storyUserImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  storyPlusIcon: {
    position: 'absolute',
    bottom: -1,
    right: -1,
  },
  contentView: {
    marginTop: 4,
  },
  post: {
    borderWidth: 1,
    borderColor: '#f1f3f6',
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
    borderTopColor: '#dfe4ea',
    backgroundColor: '#fff',
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postUsernameText: {
    flex: 1,
    marginLeft: 10,
  },
  postContent: {
    backgroundColor: '#fafafa',
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  postActions: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postActionsLeftView: {
    display: 'flex',
    flexDirection: 'row',
  },
  postActionIcon: {
    paddingHorizontal: 6,
  },
  postDescView: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
  },
  postDescText: {
    fontSize: 16,
    fontWeight: '300',
  },
  postDescUsernameText: {
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 16,
  },
  suggestionsView: {
    
  
  },
});