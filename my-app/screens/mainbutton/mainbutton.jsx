import { StatusBar } from "expo-status-bar";
import React from "react";
import { Box ,Button} from "native-base";
import {Video} from 'react-native-video'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
 TouchableOpacity
} from "react-native";
import Navbar from "../../components/Navbar";
import { LinearGradient } from "expo-linear-gradient";
import Rating from "../rating/rating";

const imagenes = [
    'https://www.shutterstock.com/image-photo/hands-young-barber-making-haircut-260nw-451276396.jpg',
    'https://pbs.twimg.com/media/DQ3w7xPX4AEIABM.jpg',
    'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Barber-Haircut-Styles-Fade-with-Brush-Up.jpg',
    'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20889.jpg?w=2000',
    'https://d2zdpiztbgorvt.cloudfront.net/region1/us/28132/biz_photo/e5e2f9b131ef473b96eb2542a4b210-rudy-the-barber-biz-photo-bfa72de0de8641299c7e1d482c8609-booksy.jpeg',
    'https://global-uploads.webflow.com/5cb569e54ca2fddd5451cbb2/5d3078b775ae2c83a149e209_Barber-Industries-Kotara-29.jpg',
    'https://i.pinimg.com/originals/db/6f/52/db6f52a815dedfac62b5339989470eec.jpg',
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTAINER_WIDTH = width * 0.8;
const CONTAINER_SPACE = (width - CONTAINER_WIDTH) / 2;
const SPACE = 10;
const HEIGHT_BACKDROP = height ;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: HEIGHT_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * CONTAINER_WIDTH,
          index * CONTAINER_WIDTH,
          (index + 1) * CONTAINER_WIDTH,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image 
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: HEIGHT_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: HEIGHT_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function Mainbutton ({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 210,
          paddingHorizontal: CONTAINER_SPACE,
        }}
        snapToInterval={CONTAINER_WIDTH}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CONTAINER_WIDTH,
            index * CONTAINER_WIDTH,
            (index + 1) * CONTAINER_WIDTH,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            
            <View style={{ width: CONTAINER_WIDTH }}>
               
              <Animated.View 
                style={{
                  marginHorizontal: SPACE,
                  padding: SPACE,
                  borderRadius: 34,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  transform: [{ translateY: scrollY }],
                }}
              >
                
                
                <Image source={{ uri: item }} style={styles.posterImage} />  
            
                <Text style={{ fontWeight: "bold", fontSize: 26 }} >
                  {" "}
                 boulbeba COIFF
                </Text>
                <Box  width={100} height={20}>
               
                <Rating />
                </Box>
                
              </Animated.View>
             
            </View>
          );
        }}
      />
      <Navbar navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    
  },
  posterImage: {
    width: "100%",
    height: CONTAINER_WIDTH * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});