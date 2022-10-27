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
    backgroundColor: '#FFFFFF'
  },
  imageContainer: {
    marginTop: -39,
    marginRight: -59,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageBackground: {
    height: 176,
    width: 176,
  }
})
