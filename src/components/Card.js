import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const App = ({ data, event }) => {
  return(
    <TouchableOpacity style={styles.card} onPress={event}>
      <Image source={data.img} style={styles.img} />
      <View style={styles.info}>
        <View style={styles.profile}>
          <Image source={require('../assets/rafael.jpg')} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
        </View>
        <View style={styles.text}>
          <Text>{ data.title }</Text>
          <View style={styles.subInfo}>
            <Text style={styles.textSub}>Rafael Augusto</Text>
            <Text style={styles.textSub}>{ data.views }</Text>
            <Text style={styles.textSub}>{ data.date }</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    height: 200
  },
  info: {
    flexDirection: 'row',
    padding: 10
  },  
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10
  },
  subInfo: {
    flexDirection: 'row',
    marginTop: 2
  },
  text: {
    flexWrap: 'wrap'
  },  
  textSub: {
    color: '#555',
    fontSize: 12,
    marginRight: 10
  }
})

export default App