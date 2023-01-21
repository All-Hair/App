import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, View, StyleSheet, TouchableOpacity} from 'react-native'

import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import VideoPlayer from 'expo-video-player'


const Videos = ({url}) => {
  const [inFullscreen, setInFullsreen] = useState(false)
  const [inFullscreen2, setInFullsreen2] = useState(false)
  const [isMute, setIsMute] = useState(false)
  const [paused, setPaused] = useState(true);

  
  const refVideo2 = useRef(null)
  const refScrollView = useRef(null)
 

  return (
    <View
      scrollEnabled={!inFullscreen2}
      ref={refScrollView}
      onContentSizeChange={() => {
        if (inFullscreen2) {
          refScrollView.current.scrollToEnd({ animated: true }) 
        }
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      
    
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode:'cover',
          source: {
            uri:url  
          },
          
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
         
        }}
        style={{
          BackgroundColor: '#ccc9c0',
          height: inFullscreen2 ? Dimensions.get('window').width : 210,
          width: inFullscreen2 ? Dimensions.get('window').height : 340,
          
        }}
        
      />

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  text: {
    marginTop: 36,
    marginBottom: 120,
  },
})

export default Videos