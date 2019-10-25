import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Card from './Card'

const json = [
  {
    id: 1,
    img: require('../assets/got.jpg'),
    title: 'Game of Thrones - Seasson 8',
    views: '523K',
    date: '6 months ago'
  },
  {
    id: 2,
    img: require('../assets/ns.png'),
    title: 'Build truly native mobile applications using Vue',
    views: '223K',
    date: '2 months ago'
  },
  {
    id: 3,
    img: require('../assets/himym.jpg'),
    title: 'How i met Your mother - Shake it out',
    views: '252K',
    date: '9 months ago'
  }
]

const App = ({ event }) => {
  return(
    <View style={styles.list}>
      <FlatList
        data={json}
        renderItem={({ item }) => <Card data={item} event={event} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 100
  }
})

export default App