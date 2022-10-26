import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { GenerationV, GenerationVi } from '../../../interfaces/pokemonInterfaces';
import { FadeInImage } from '../../FadeInImage';
import { styles } from '../theme/styles';

interface Props {
  generationFive:GenerationV|undefined,
  generationSix:{ [key: string]: GenerationVi}|undefined,
  color: string,
}


export const GenerationFiveSix = ({generationFive,generationSix,color}:Props) => {

  const {width: windowWidth} = Dimensions.get('screen');

  return (
    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation v</Text>
        {(generationFive) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationFive['black-white'].back_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationFive['black-white'].front_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationFive['black-white'].back_shiny}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>

      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation vi</Text>
        {(generationSix) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationSix['omegaruby-alphasapphire'].front_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationSix['omegaruby-alphasapphire'].front_shiny}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationSix['x-y'].front_default}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>
    </View>
  )
}

