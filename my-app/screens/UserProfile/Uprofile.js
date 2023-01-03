import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Navbar from '../../components/Navbar';

const Uprofile =  ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/walid.png')}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.active}></View>
          <TouchableOpacity onPress={()=>navigation.navigate("UpdateUpro")}>

          <View style={styles.update} >
            <MaterialIcons
              name="edit"
              size={18}
              color="#DFD8C8"
            ></MaterialIcons>
          </View>
          </TouchableOpacity>

        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: '200', fontSize: 36 }]}>
            Walid
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={[styles.subText]}>informations</Text>
          <Text style={[styles.text, { color: '#41444B', fontWeight: '300' }]}>
            Name :{'                '}
            <Text style={{ fontWeight: '600' }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: '#41444B', fontWeight: '300' }]}>
            phone :{'                '}
            <Text style={{ fontWeight: '600' }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: '#41444B', fontWeight: '300' }]}>
            email :{'                '}
            <Text style={{ fontWeight: '600' }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: '#41444B', fontWeight: '300' }]}>
            Adress :{'                '}
            <Text style={{ fontWeight: '600' }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: '#41444B', fontWeight: '300' }]}>
            Name :{'                '}
            <Text style={{ fontWeight: '600' }}>Jake Challeahe</Text>
          </Text>
        </View>
      </ScrollView>
      <Navbar/>
    </SafeAreaView>
  );
};

export default Uprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: '',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  update: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  info: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: ' rgba(204, 201, 192, 0.4)',
    height: 300,
    width: 300,
    borderRadius: 20,
    letterSpacing:5,
    justifyContent:"space-evenly",
    padding:2
  },
});