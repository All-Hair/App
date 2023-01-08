import React, { useState } from 'react';
import { View,  Text, StyleSheet ,Image, SafeAreaView, TouchableHighlight, Dimensions} from 'react-native';
// import ImageSlider from 'react-native-image-slider';
// import { Image } from 'react-native-svg';
// import Slider from '@react-native-community/slider';
import { ScrollView } from 'native-base';

const WIDTH =Dimensions.get('window').width
const HEIGTH = Dimensions.get('window').height
const SliderPhotos = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
const [imgActive,setimgActive] = useState(0)


onchange=(nativeEvent)=>{
  if(nativeEvent){
    const slide=Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width);
    if(slide != imgActive){
      setimgActive(slide)
    }
  }
}
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU',
    'https://m.media-amazon.com/images/I/61N6De+CSdL.jpg',
  ];


  return (
   <SafeAreaView style={styles.container}>
   <View style={styles.wrap}>
   <ScrollView onScroll={({nativeEvent}) => onchange(nativeEvent)}
   showsHorizontalScrollIndicator={false}
   pagingEnabled
   horizontal
   style={styles.wrap}
   >
  {images.map((e,i)=>
  <Image key={i} 
  resizeMode="stretch"
  style={styles.wrap}
  source={{uri:e}}
  />
  )}
   </ScrollView>
   <View style={styles.wrapDot}>
  {images.map((e,index)=>
  <Text key={e} 
  style={imgActive == index ? styles.dotAcitve :styles.dot}
  >
    ●
  </Text>
  )}
   </View>
   </View>
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  wrap:{
  width:WIDTH,
  height:HEIGTH * 0.25
  },
  wrapDot:{
  position:'absolute',
  bottom:0,
  flexDirection:'row',
  alignSelf:"center"
  },
  dotActive:{
   margin:3,
   color:"black"
  },
  dot:{
  margin:3,
  color:'white'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  slider: {
    width: 300,
    height: 40,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});
export default SliderPhotos
