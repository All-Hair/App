import MapView, { Polyline, Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  SafeAreaView
} from "react-native";

import Navbar from "../../components/Navbar";
import { useState } from "react";
import Field from "../signup/field";


export default function Location ({ navigation }) {
  const[direction,setDirection]=useState(false)
  const[mark,setMark]=useState(false)
  const[load,setLoad]=useState(false)
  const coords = [
    { latitude: 36.89420428096015, longitude: 10.187029838562012 },
    { latitude: 36.894313171040054, longitude: 10.186683494648424 },
    { latitude: 36.893437899618085, longitude: 10.187102111775065 },
    { latitude: 36.893138745827606, longitude: 10.18681514271747 },
    { latitude: 36.89255256181143, longitude: 10.187081400172593 },
    { latitude: 36.89032727042787, longitude: 10.180745932002191 },
  ];
  
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.877011639659145,
          longitude: 10.185270309448244,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
    {   direction==true ? 
    <Polyline
          coordinates={coords}
          strokeWidth={3}
          geodesic={true}
          strokeColor="#1221F3"
         
        /> :
        <Polyline
        coordinates={[]}
        strokeWidth={3}
        geodesic={true}
        strokeColor="#1221F3"
       
      />
        }

        <Marker
          title="your position"
          coordinate={{
            latitude: 36.89420428096015,
            longitude: 10.187029838562012,
          }}
          
        />
        { mark==true?
        <Marker
        title="all hair saloon"
          coordinate={{
            latitude: 36.89032727042787,
            longitude: 10.180745932002191,
           
          }}
        />:
        console.log('by')
          }
        
        
      </MapView>
      <View  style={styles.searchContainer }>
       
       <Field />
       <TouchableOpacity
         onPress={()=>{ setLoad(!load);setTimeout(() => {
          setDirection(!direction); setMark(!mark) ; setLoad(false)
         }, 2500);}}
          style={{
            width: '50%',
            height: '50%',
            backgroundColor:'#ccc9c0',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            top:10,
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
            left:70
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: 1,
              color: 'white',
              textTransform: 'uppercase',
              
            }}>
            search
          </Text>
        </TouchableOpacity>
        <ActivityIndicator size="large" color="#0000ff" animating={load} style={{left:-19 ,top: 15}}/>
      </View>
      
      <Navbar navigation={navigation}  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    // backgroundColor: "white",
    
    
    padding: 8,
    
    left:40
  
  },
   searchContainer: {
    position: "absolute",
    width: "90%",
    // backgroundColor: "white",
    
    
    padding: 8,
    
    left:40
  
  },
});
