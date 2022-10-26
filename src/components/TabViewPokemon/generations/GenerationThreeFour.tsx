import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { GenerationIii, GenerationIv } from '../../../interfaces/pokemonInterfaces';
import { FadeInImage } from '../../FadeInImage';
import { styles } from '../theme/styles';

interface Props {
  generationThree:GenerationIii|undefined,
  generationFour:GenerationIv|undefined,
  color: string,
}


export const GenerationThreeFour = ({generationThree,generationFour, color}:Props) => {

  const {width: windowWidth} = Dimensions.get('screen');


  return (
    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation iii</Text>
        {(generationThree) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationThree.emerald.front_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationThree.emerald.front_shiny}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationThree['firered-leafgreen'].back_default}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>

      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation iv</Text>
        {(generationFour) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationFour['diamond-pearl'].back_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationFour['heartgold-soulsilver'].back_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationFour['diamond-pearl'].back_shiny}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>
    </View>
  )
}

