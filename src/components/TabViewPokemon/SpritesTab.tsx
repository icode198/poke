import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { PokemonDetail } from '../../interfaces/pokemonInterfaces';
import { GenerationOneTwo } from './generations/GenerationOneTwo';
import { GenerationThreeFour } from './generations/GenerationThreeFour';
import { GenerationFiveSix } from './generations/GenerationFiveSix';
import { GenerationSevenEight } from './generations/GenerationSevenEight';

interface Props {
  pokemon: PokemonDetail;
  color: string;
}

export const SpritesTab = ({pokemon, color}:Props) => {

  const generationI     = pokemon.sprites.versions?.['generation-i'];
  const generationTwo   = pokemon.sprites.versions?.['generation-ii'];
  const generationThree = pokemon.sprites.versions?.['generation-iii'];
  const generationFour  = pokemon.sprites.versions?.['generation-iv'];
  const generationFive  = pokemon.sprites.versions?.['generation-v'];
  const generationSix   = pokemon.sprites.versions?.['generation-vi'];
  const generationSeven = pokemon.sprites.versions?.['generation-vii'];
  const generationEight = pokemon.sprites.versions?.['generation-viii'];

  return (
    <ScrollView contentContainerStyle={styles.spritesContainer} showsVerticalScrollIndicator={false}>
      <GenerationOneTwo generationI={generationI} generationTwo={generationTwo} color={color}  />
      <GenerationThreeFour generationThree={generationThree} generationFour={generationFour} color={color} />
      <GenerationFiveSix generationFive={generationFive} generationSix={generationSix} color={color} />
      <GenerationSevenEight generationSeven={generationSeven} generationEight={generationEight} color={color} />
      <View style={{marginBottom: 50}}></View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  spritesContainer: {
    alignItems: 'center', 
    backgroundColor: 'transparent', 
  },
})
