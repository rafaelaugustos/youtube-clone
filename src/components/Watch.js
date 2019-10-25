import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated, Dimensions, Image, TouchableOpacity } from 'react-native'
import YouTube from 'react-native-youtube'

const Watch = ({ status, event }) => {
  const [state, setState] = useState({
    position: new Animated.Value(Dimensions.get('window').height)
  })

  const show = () => {
    Animated.timing(state.position, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  const hide = () => {
    Animated.timing(state.position, {
      toValue: Dimensions.get('window').height,
      useNativeDriver: true,
      duration: 200
    }).start()
  }

  useEffect(() => {
    if(status){
      show()
    }else{
      hide()
    }
  })

  return( 
    <Animated.View 
      style={[styles.modal, {
        transform: [
          { translateY: state.position }
        ]
      }]}
    >
      <TouchableOpacity style={styles.arrow} onPress={event}>
        <Image source={require('../assets/arrow.png')} style={styles.icon} />
      </TouchableOpacity>
      {
        status &&
        <YouTube
          videoId="TPJ9SIYUG0c"
          play
          loop
          style={{ alignSelf: 'stretch', height: 300 }}
        />
      }
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 50
  },
  arrow: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 9999
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
})

export default Watch