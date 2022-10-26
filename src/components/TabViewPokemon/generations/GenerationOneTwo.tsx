import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { GenerationI, GenerationIi } from '../../../interfaces/pokemonInterfaces';
import { FadeInImage } from '../../FadeInImage';
import { styles } from '../theme/styles';

interface Props {
  generationI:GenerationI|undefined,
  generationTwo:GenerationIi|undefined,
  color: string,
}

export const GenerationOneTwo = ({generationI, generationTwo, color}:Props) => {

  const {width: windowWidth} = Dimensions.get('screen');

  return (
    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation i</Text>
        {(generationI) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationI['red-blue'].back_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationI['red-blue'].back_gray}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationI['red-blue'].front_default}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>

      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation ii</Text>
        {(generationTwo) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationTwo.crystal.back_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationTwo.crystal.back_shiny}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationTwo.crystal.front_default}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>
    </View>
  )
}

