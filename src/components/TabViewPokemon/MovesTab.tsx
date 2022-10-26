import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PokemonDetail } from '../../interfaces/pokemonInterfaces'

interface Props {
  pokemon: PokemonDetail;
  color: string;
}

export const MovesTab = ({pokemon, color}:Props) => {
  return (
    <ScrollView style={styles.typesContainer}>
      {
        pokemon.moves.map(({move}) => (
          <View key={move.name} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
            <Icon
              name='flask-outline'
              color={color}
              size={30}
            />
            <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10, fontFamily: 'FingerPaint-Regular',}}>{move.name}</Text>
          </View>
        ))
      }
      <View style={{marginBottom: 50}}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  typesContainer: {
    flex: 1, 
    //backgroundColor: 'indigo', 
  },
})
