import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
  return(
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: '#fff'
  },
  img: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  }
})

export default Header