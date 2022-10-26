import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  children: JSX.Element|JSX.Element [],
}


export const PokeBackground = ({children}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/pokedex/pokebola-blanca.png')}
          style={styles.imageBackground} 
        />
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C04C4B'
  },
  imageContainer: {
    marginTop: -110,
    marginRight: -70,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageBackground: {
    opacity: 0.5,
    height: 300, 
    width: 300, 
  }
})
