import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PokemonDetail } from '../interfaces/pokemonInterfaces'
import { TabViewPokemonDetails } from './TabViewPokemonDetails';

interface Props {
  pokemon: PokemonDetail,
  color: string,
}

export const PokemonDetails = ({pokemon, color}:Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 20}}>
        <TabViewPokemonDetails pokemon={pokemon} color={color} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
