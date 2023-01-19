import React, { useState,useEffect } from 'react';
import Navbar from '../../components/Navbar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import localStorage from '../../components/localStorage'

// import Pricelist from '../pricelist/Pricelist.jsx';

function Photos() {
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        
          <View>
          </View>
        
      </View>
    </View>
  );
}

function Albums() {
  const [albums] = useState([
    {
      name: 'Men',
      images: [
        'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Barber-Haircuts.jpg',
        'https://pbs.twimg.com/media/DQ3w7xPX4AEIABM.jpg',
        'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Barber-Haircut-Styles-Fade-with-Brush-Up.jpg',
        'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20889.jpg?w=2000',
      ],
    },
    {
      name: 'KIDS',
      images: [
        'https://s3-media0.fl.yelpcdn.com/bphoto/-1myUjtrBvaEul6yHKE3Ag/348s.jpg',
        'https://d2zdpiztbgorvt.cloudfront.net/region1/us/28132/biz_photo/e5e2f9b131ef473b96eb2542a4b210-rudy-the-barber-biz-photo-bfa72de0de8641299c7e1d482c8609-booksy.jpeg',
        'https://global-uploads.webflow.com/5cb569e54ca2fddd5451cbb2/5d3078b775ae2c83a149e209_Barber-Industries-Kotara-29.jpg',
        'https://i.pinimg.com/originals/db/6f/52/db6f52a815dedfac62b5339989470eec.jpg',
      ],
    },
  ]);
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 20 }}>
      {albums.map((album,index) => (
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} key={index} >
          {album.images.map((img,index) => (
            <Image key={index} 
              style={{ width: imgWidth + 50, height: imgWidth + 50 }}
              source={{ uri: img }}
            />
          ))}
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              backgroundColor: '#111',
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>
              {album.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Tags({ photos }) {
  const[mapRegion,setMapregion] = useState({
    latitude:36.866537,
    longitude: 10.164723,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421,
  })
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  const userLocation =async ()=>{
    let {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted'){
      setErrorMsg('Permission to accses location was denied ')
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true})
    setMapregion({
      latitude:location.coords.latitude,
      longitude:Location.coords.longitude,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421,
    })
    console.log(location.coords.latitude,location.coords.longitude);
  }
  useEffect(()=>{
    userLocation()

  },[])
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        <MapView style={{ width: '100%', height: '200%',}}  
        
        region={mapRegion}
        
        >
        <Marker coordinate={mapRegion} title="all hair saloon"/>
        
        </MapView>
        <Button title=' Get Location ' onPress={userLocation}/>
          <View>
            <Image
              style={{ width: imgWidth, height: imgWidth+110 }}
              source={{
           
              }}
            />
          </View>
        
      </View>
    </View>
  );
}

const Sprofile = ({navigation}) => {
  

  const [showContent, setShowContent] = useState('Photos');

  const [user,setUser]= useState ({})
  console.log("🚀 ~ file: sprofile.jsx:159 ~ Sprofile ~ user", user)




  useEffect(() => {
    const localGetData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
          const jsonparseValue = JSON.parse(jsonValue) 
          setUser(jsonparseValue)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }
    
  localGetData()
  
// const u = localStorage.localGetData()
//     setUser(u)

  console.log("user fil saloon profile  ",user.role);
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={ require( 'my-app/assets/profilbackground.png' )}
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
                    uri: 'https://img.freepik.com/vecteurs-premium/gentleman-barber-shop-logo_96485-97.jpg?w=2000',
                  }}
                />
                
              </View>
              
              {/* Profile Name and Bio */}
              
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{'ALL Hair Saloon'}</Text>
                
              </View>
              {/* Posts/Followers/Following View */}
              <View style={styles.countsView}>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>13</Text>
                  <Text style={styles.countText}>Posts</Text>
                </View>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>4/5</Text>
                  <Text style={styles.countText}>Rate</Text>
                </View>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>348</Text>
                  <Text style={styles.countText}>Likes</Text>
                </View>
              </View>
              {/* Interact Buttons View */}
              <View style={styles.interactButtonsView}>
           {/* {   user.role ==='saloon' ?              */}
           <TouchableOpacity style={styles.interactButton} onPress={()=>{navigation.navigate('DateSelect')}}>
                  <Text style={styles.interactButtonText}>update profile</Text>
                </TouchableOpacity>
                {/* : */}
                 <TouchableOpacity style={styles.interactButton} onPress={()=>{navigation.navigate('DateSelect')}}>
                 <Text style={styles.interactButtonText}>APPOINTMENT</Text>
               </TouchableOpacity>
                {/* } */}
                
                <TouchableOpacity style={styles.interactButton} onPress={()=>{navigation.navigate('Pricelist')}}>
                  <Text style={styles.interactButtonText}>PRICE LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.interactButton} onPress={()=>{navigation.navigate('addPost')}}>
                  <Text style={styles.interactButtonText}>ADD POST </Text>
                </TouchableOpacity>
                
              </View>
              {/* Mutual Followed By Text */}
              <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
                
                
              </View>
            </View>
            {/* Profile Content */}
            <View style={{ marginTop: 20 }}>
              <View style={styles.profileContentButtonsView}>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Photos')}
                >
                  <Text style={styles.showContentButtonText}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Albums' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Albums')}
                >
                  <Text style={styles.showContentButtonText}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Tags' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Tags')}
                >
                  <Text style={styles.showContentButtonText}>Location</Text>
                </TouchableOpacity>
              </View>
              {showContent === 'Photos' ? (
                <Photos photos={new Array(13).fill(1)} />
              ) : showContent === 'Albums' ? (
                <Albums />
              ) : (
                <Tags photos={new Array(23).fill(1)} />
              )}
            </View>
          </View>
        </>
        
        
      </ScrollView>
      <Navbar  navigation ={navigation} />
    </SafeAreaView>
    
  );
}
export default Sprofile
const styles = StyleSheet.create({
  coverImage: { height: 300, width: '100%' },
  profileContainer: {
    // height: 1000,
    backgroundColor: '#fff',
    marginTop: -100,
    borderTopLeftRadius: 110,
    borderTopRightRadius: 0,
  },
  profileImageView: { alignItems: 'center', marginTop: -80 },
  profileImage: {
    width:150,
    height:150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#CCC9C0',
  },
  nameAndBioView: { alignItems: 'center', marginTop: 10 },
  userFullName: { fontSize: 26 ,  textDecorationLine: 'underline'},
  userBio: {

    fontSize: 18,
    color: '#333',
    marginTop: 4,
    
    
  
  },
  countsView: { flexDirection: 'row', marginTop: 20 },
  countView: { flex: 1, alignItems: 'center' },
  countNum: {  fontSize: 20 },
  countText: {  fontSize: 18, color: '#333' },
  interactButtonsView: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC9C0',
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
    
        
    color: '#FFF',
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: 'row',
    borderTopWidth: 3,
    borderTopColor: '#CCC9C0',
  },
  showContentButton: {
    flex: 2,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#CCC9C0',
  },
  showContentButtonText: {
    
    fontSize: 18,
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
  }
});



