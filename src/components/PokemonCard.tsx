import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SinglePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import { Spacer } from './Spacer';
import { getImageColors } from '../helpers/getImageColors';

interface Props {
  pokemon: SinglePokemon;
}

const {width: windowWidth} = Dimensions.get('screen');

export const PokemonCard = ({pokemon}:Props) => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const [bgColor, setBgColor] = useState('#bdbdbd');

  const isMounted = useRef(true);

  const getImageColor = async (pokemon:SinglePokemon) => {
    const {id, image} = pokemon;
    const { background = '#bdbdbd' } =  await getImageColors(id, image);
    if(!isMounted) return;
    setBgColor(background);
  }
  
  useEffect(() => {
    if(isMounted) {
      getImageColor(pokemon);
    }
    //When component is unmounted
    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.cardContainer, width: windowWidth * 0.4, backgroundColor: bgColor }} 
        activeOpacity={0.5}
        onPress={() => navigation.navigate('PokemonScreen', {
          singlePokemon: pokemon, 
          color: bgColor
        })}
      >
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <Text style={styles.pokemonTitle}>{pokemon.name}
          </Text><Spacer />
          <Text style={styles.pokemonTitle}>{'#' + pokemon.id}</Text>
        </View>
        <View style={styles.pokeContainer}>
          <Image
            source={require('../assets/pokedex/pokebola-blanca.png')}
            style={styles.pokemonBackImage}
          />
        </View>
        <FadeInImage
          uri={pokemon.image}
          style={styles.pokemonImage}
        />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  cardContainer: {
    borderRadius: 20,
    marginVertical: 10,
    height: 120,
    shadowColor: "black",
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  pokemonTitle: {
    top: 10,
    fontSize: 20,
    //fontWeight: 'bold',
    fontFamily: 'FingerPaint-Regular',
    color: 'white',
  },
  pokeContainer: {
    overflow: 'hidden',
    opacity: 0.5,
    position: 'relative',
    right: -85,
    borderRadius: 10,
    bottom: -13,
    width: 80,
    height: 80,
    //backgroundColor: 'red',
  },
  pokemonBackImage: {
    position: 'relative',
    right: -20,
    bottom: -20,
    width: 80,
    height: 80,
  },
  pokemonImage: {
    position: 'absolute',
    top: -70,
    right: 10,
    width: 100,
    height: 100
  }
})
