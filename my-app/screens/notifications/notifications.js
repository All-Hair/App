// import React, { useEffect } from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
// import * as Notification from "expo-notifications";
// import * as Permission from "expo-permissions";

// Notification.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldPlaySound: true,
//       shouldShowAlert: true,
//     };
//   },
// });

// export default function Notifications () {
//   useEffect(() => {
//     Permission.getAsync(Permission.NOTIFICATIONS)
//       .then((response) => {
//         if (response.status !== "granted") {
//           return Permission.askAsync(Permission.NOTIFICATIONS);
//         }
//         return response;
//       })
//       .then((response) => {
//         if (response.status !== "granted") {
//           return;
//         }
//       });
//   }, []);

//   const handleNotification = () => {
//     Notification.scheduleNotificationAsync({
//       content: {
//         title: "APPOINTMENT",
//         body: "you have an appointment to",
//       },
//       trigger: {
//         seconds: 2,
//       },
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <Button title={"Open Notification"} onPress={handleNotification} />
//     </View>
//   ); 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import MapView, { Polyline,Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
// import {
//   GooglePlaceDetail,
//   GooglePlacesAutocomplete,
// } from "react-native-google-places-autocomplete";
import Navbar from "../../components/Navbar";
// import Constants from "expo-constants";
// import { useRef, useState } from "react";
// import MapViewDirections from "react-native-maps-directions";

// // https://docs.expo.dev/versions/latest/sdk/map-view/
// // https://www.npmjs.com/package/react-native-google-places-autocomplete
// // https://www.npmjs.com/package/react-native-maps-directions

// const { width, height } = Dimensions.get("window");
// const GOOGLE_API_KEY = "AIzaSyAS-XrwgqSWlDz23z1DbCXSfzNGMfcICuU"
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const INITIAL_POSITION = {
//   latitude:36.877011639659145,
//   longitude: 10.185270309448244,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,

// };


// function InputAutocomplete({
//   label,
//   placeholder,
//   onPlaceSelected,
// }) {
//   return (
//     <>
//       <Text>{label}</Text>
//       <GooglePlacesAutocomplete
//         styles={{ textInput: styles.input }}
//         placeholder={placeholder || ""}
//         fetchDetails
//         onPress={(data, details = null) => {
//           onPlaceSelected(details);
//         }}
//         query={{
//           key: GOOGLE_API_KEY,
//           language: "pt-BR",
//         }}
//       />
//     </>
//   );
// }


export default function Notifications ({navigation}) {



  const coords = [
    {latitude:36.89420428096015,longitude:10.187029838562012 } ,
   {latitude:36.894313171040054,longitude:10.186683494648424 },
    {latitude:36.893437899618085,longitude:10.187102111775065 },
    {latitude:36.893138745827606,longitude:10.18681514271747},
    {latitude:36.89255256181143,longitude: 10.187081400172593},
     {latitude:36.89032727042787,longitude:10.180745932002191 },
  ];
  return (
   
      <MapView
          style={styles.map}
          initialRegion={{
              latitude: 36.877011639659145,
              longitude: 10.185270309448244,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}>
          <Polyline
              coordinates={coords}
              strokeWidth={3}
        geodesic={true}
        strokeColors='blue'
          />
                
    
    <Marker coordinate={{latitude:36.89420428096015,longitude:10.187029838562012}} />
    <Marker coordinate={{latitude:36.89032727042787,longitude:10.180745932002191 }} />
    <Navbar/>

      </MapView>
      
    
  );
}

const styles = StyleSheet.create({
  map: {
      width: '100%',
      height: '100%'
  },
});







//   const [origin, setOrigin] = useState ();
//   const [destination, setDestination] = useState ();
//   const [showDirections, setShowDirections] = useState(false);
//   const [distance, setDistance] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const mapRef = useRef (null);
  
//   const moveTo = async (position) => {
//     const camera = await mapRef.current?.getCamera();
//     if (camera) {
//       camera.center = position;
//       mapRef.current?.animateCamera(camera, { duration: 1000 });
//     }
//   };
  
  

//   const edgePaddingValue = 70;

//   const edgePadding = {
//     top: edgePaddingValue,
//     right: edgePaddingValue,
//     bottom: edgePaddingValue,
//     left: edgePaddingValue,
//   };

//   const traceRouteOnReady = (args) => {
//     if (args) {
//       // args.distance
//       // args.duration
//       setDistance(args.distance);
//       setDuration(args.duration);
//     }
//   };

//   const traceRoute = () => {
   
//       setShowDirections(true);
//       mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    
//   };

//   const onPlaceSelected = (
//     details,
//     flag
//   ) => {
//     const set = flag === "origin" ? setOrigin : setDestination;
//     const position = {
//       latitude: details?.geometry.location.lat || 0,
//       longitude: details?.geometry.location.lng || 0,
//     };
//     set(position);
//     moveTo(position);
//   };
//   return (
//     <View style={styles.container}>
//       <MapView
//         ref={mapRef}
//         style={styles.map}
        
//         initialRegion={INITIAL_POSITION}
//       >
//       <Marker coordinate={{latitude:36.89420428096015,longitude:10.187029838562012 }} title="rebootkamp"/>
//       <Marker coordinate={{latitude:36.890235771855565,longitude:10.180597901344301 }} title="all hair saloon"/>
//         {origin && <Marker coordinate={origin} />}
//         {destination && <Marker coordinate={destination} />}
        
//       </MapView>
//       <View style={styles.searchContainer}>
        // <InputAutocomplete
        //   label="Origin"
        //   onPlaceSelected={(details) => {
        //     onPlaceSelected(details, "origin");
        //   }}
        // />
        // <InputAutocomplete
        //   label="Hair saloon"
        //   onPlaceSelected={(details) => {
        //     onPlaceSelected(details, "destination");
        //   }}
        // />
//         <TouchableOpacity style={styles.button} onPress={traceRoute}>
//           <Text style={styles.buttonText}>Find your coiff</Text>
//         </TouchableOpacity>
//         {distance && duration ? (
//           <View>
//             <Text>Distance: {distance.toFixed(2)}</Text>
//             <Text>Duration: {Math.ceil(duration)} min</Text>
//           </View>
//         ) : null}
//       </View>
//       <Navbar navigation={navigation}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
//   searchContainer: {
//     position: "absolute",
//     width: "90%",
//     backgroundColor: "white",
//     shadowColor: "black",
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 4,
//     padding: 8,
//     borderRadius: 8,
//     top: Constants.statusBarHeight,
//   },
//   input: {
//     borderColor: "#888",
//     borderWidth: 1,
//   },
//   button: {
//     flex: 3,
//     flexDirection: 'row',
//     alignContent: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#CCC9C0',
//     margin: 9,
//     borderRadius: 10,
//     shadowOpacity: 0.7,
//         shadowRadius: 7.49,
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
        
//         elevation: 6,
//         paddingVertical: 12
//   },
//   buttonText: {
//     borderRadius: 10,
    
        
//     color: '#FFF',
//     fontSize: 18,
//     paddingVertical: 6,
//   },
// });
