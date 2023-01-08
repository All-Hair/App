import React, { useState } from 'react';
import { View,  Text, StyleSheet ,Image, SafeAreaView, TouchableHighlight, Dimensions} from 'react-native';
// import ImageSlider from 'react-native-image-slider';
// import { Image } from 'react-native-svg';
// import Slider from '@react-native-community/slider';
import { ScrollView } from 'native-base';
import Navbar from '../../components/Navbar';
import {Feather,Fontisto,MaterialIcons,MaterialCommunityIcons,} from 'react-native-vector-icons'

const WIDTH =Dimensions.get('window').width
const HEIGTH = Dimensions.get('window').height
const SliderPhotos = ({ navigation }) => {
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
   <Navbar navigation={navigation}/>
   <View >
   <View style={styles.info}>
          <Text style={[styles.subText]}>informations</Text>
          <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialCommunityIcons  size ={19} name='hair-dryer'>  </MaterialCommunityIcons>
            Name :{"                "}
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Feather  size ={19} >  </Feather>
         PRICE :{"                 "}
            
            <Text style={{ fontWeight: "600" }}>150 dt </Text>
          </Text>

          <Text style={[styles.text, { color: "#000000" }]}>
          <Fontisto  size ={19} >        </Fontisto>
          DETAILS :{"                   "}
            <Text style={{ fontWeight: "800 " }}>csdiubui dbviusdbuidvuibsd vuibvsdiudisvuisdb </Text>
          </Text> 

          {/* <Text style={[styles.text, { color: "#000000" }]}>
          <MaterialIcons  size ={19} name='place'>  </MaterialIcons>
            Adress :{"                "}
            <Text style={{ fontWeight: "600" }}>Jake Challeahe</Text>
          </Text> */}
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
  height:HEIGTH * 0.35
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
    backgroundColor: "#e4dedc",
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

    color: "#000000",
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
export default SliderPhotos
