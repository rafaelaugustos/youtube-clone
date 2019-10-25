import React, { useState } from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import List from '../components/List'
import Watch from '../components/Watch'

const App = () => {
  const [state, setState] = useState({
    watching: false
  })

  const handleWatch = () => {
    setState({
      ...state,
      watching: !state.watching
    })
  }

  return(
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <Header />
      <List event={handleWatch} />
      <Watch status={state.watching} event={handleWatch} />
    </View>
  )
}

export default App