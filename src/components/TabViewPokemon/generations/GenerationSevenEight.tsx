import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { GenerationVii, GenerationViii } from '../../../interfaces/pokemonInterfaces';

import { FadeInImage } from '../../FadeInImage';
import { styles } from '../theme/styles';

interface Props {
  generationSeven:GenerationVii|undefined,
  generationEight:GenerationViii|undefined,
  color: string,
}


export const GenerationSevenEight = ({generationSeven,generationEight,color}:Props) => {

  const {width: windowWidth} = Dimensions.get('screen');


  return (
    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation vii</Text>
        {(generationSeven) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationSeven.icons.front_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationSeven['ultra-sun-ultra-moon'].front_default}
              style={styles.pokemonGenerationImage}
            />
            <FadeInImage
              uri={generationSeven['ultra-sun-ultra-moon'].front_shiny}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>

      <View style={{ ...styles.pokeColumnBlock, width: windowWidth * 0.4, backgroundColor: color }}>
        <Text style={{ ...styles.titleColumn, color: 'white' }}>Generation viii</Text>
        {(generationEight) &&
          <View style={{ flexDirection: 'row', }}>
            <FadeInImage
              uri={generationEight.icons.front_default}
              style={styles.pokemonGenerationImage}
            />
          </View>
        }
      </View>
    </View>
  )
}

