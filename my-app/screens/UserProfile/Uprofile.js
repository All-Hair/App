import React, { useState ,useEffect} from "react";
import Navbar from "../../components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import {Feather,Fontisto,MaterialIcons,MaterialCommunityIcons,} from 'react-native-vector-icons'
// import axios from 'axios'
import client from "../../api/client";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from "../../firebase";
import UpdateUpro from "./UpdateUpro";
const Uprofile = ({ navigation }) => {
  const [users,setUsers]= useState([])
 console.log(users,"----");
 console.log(auth.currentUser.email,'<<<<<<<<<<<<<<<<<<<<');
 const[email,setEmail]= useState(auth.currentUser.email)


   const getAll =async()=>{
    //  let email = users
     console.log(email,'----aaa--aaa');
     try{
    const res= await client.get(`/user/getone/${email}`)
    setUsers(res.data)
  //  console.log(res.data,'--------AHMEDDD-----');
    }catch(error){
    console.log(error);
  }
  
}

useEffect(()=>{ 
  getAll()
},[])
   return (
     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={require("my-app/assets/profilbackground.png")}
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                  }}
                  />
                
              </View>
           

              {/* Profile Name and Bio */}

              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{users.name}</Text>
              </View>
              {/* Posts/Followers/Following View */}

              {/* Interact Buttons View */}
              <View style={styles.interactButtonsView}>
                <TouchableOpacity style={styles.interactButton}>
                  <Text style={styles.interactButtonText} onPress={() => {
                    navigation.navigate("UpdateUpro",{users:users})
                  // console.log('--------');
                  }}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              {/* Mutual Followed By Text */}
              <View style={{ paddingHorizontal: 25, marginTop: 10 }}></View>
            </View>
            {/* Profile Content */}
          </View>
        </>

        <View style={styles.info}>
          <Text style={[styles.subText]}>informations</Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={19} name='hair-dryer'>  </MaterialCommunityIcons>
            Name :      {"                "}
            <Text style={{ fontWeight: "600" }}>{users.name}</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Feather  size ={19} name='phone-call'>  </Feather>
             Phone :{"                "}
            
            <Text style={{ fontWeight: "600" }}>{users.phone}</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Fontisto  size ={19} name='email'>  </Fontisto>
            Email :{"                "}
            <Text style={{ fontWeight: "600" }}> {users.email}</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialIcons  size ={19} name='place'>  </MaterialIcons>
            Adress :{"                "}
            <Text style={{ fontWeight: "600" }}>{users.adress}</Text>
          </Text>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  coverImage: { height: 300, width: "100%" },
  profileContainer: {
    // height: 1000,
    backgroundColor: "#fff",
    marginTop: -100,
    borderTopLeftRadius: 130,
    borderTopRightRadius: 0,
  },
  profileImageView: { alignItems: "center", marginTop: -80 },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#CCC9C0",
  },
  nameAndBioView: { alignItems: "center", marginTop: 10 },
  userFullName: {  'fontSize': 26 },
  userBio: {
  
    fontSize: 18,
    color: "#333",
    marginTop: 4,
  },
  subText: {
    fontSize: 15,
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  countsView: { flexDirection: "row", marginTop: 20 },
  countView: { flex: 1, alignItems: "center" },
  countNum: { fontSize: 20 },
  countText: {  fontSize: 18, color: "#333" },
  interactButtonsView: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 3,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#CCC9C0",
    margin: 9,
    borderRadius: 10,
    shadowOpacity: 0.7,
    shadowRadius: 7.49,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 6,
  },
  interactButtonText: {
    borderRadius: 10,

    color: "#fff",
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: "row",
    borderTopWidth: 3,
    borderTopColor: "#CCC9C0",
  },
  showContentButton: {
    flex: 2,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#CCC9C0",
  },
  showContentButtonText: {
    fontSize: 18,
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
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
    opacity: 0.4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#CCC9C0",
    height: 300,
    width: 300,
    borderRadius: 20,
    letterSpacing: 5,
    justifyContent: "space-evenly",
    padding: 2,
  },

});

export default Uprofile;