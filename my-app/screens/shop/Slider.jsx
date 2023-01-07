import React, { useState } from 'react';
import { View,  Text, StyleSheet ,Image, SafeAreaView, TouchableHighlight} from 'react-native';
import ImageSlider from 'react-native-image-slider';
// import { Image } from 'react-native-svg';
import Slider from '@react-native-community/slider';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
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

const SliderPhotos = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7hByhjV3B_CWuKlyQ3OmY7bNyqfInaatww&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU',
    'https://m.media-amazon.com/images/I/61N6De+CSdL.jpg',
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content1}>
          <Text style={styles.contentText}>Content 1</Text>
        </View>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
        <View style={styles.content2}>
          <Text style={styles.contentText}>Content 2</Text>
        </View>
      </SafeAreaView>
  );
}
export default SliderPhotos
