import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SinglePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import { getImageColors } from '../helpers/getImageColors';

interface Props {
  pokemon: SinglePokemon;
}

const {width: windowWidth} = Dimensions.get('screen');

export const PokemonCard = ({pokemon}:Props) => {
  const colors = ["#70CDB1", "#E9756F", "#8ABCF5", "#F5DA82"];

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const [bgColor, setBgColor] = useState(colors[parseInt((parseInt(pokemon.id) - 1) / 3) % 4]);

  const isMounted = useRef(true);

  const getImageColor = async (pokemon:SinglePokemon) => {
    const {id, image} = pokemon;
    const { background = '#bdbdbd' } =  await getImageColors(id, image);
    if(!isMounted) return;
    setBgColor(background);
  }
  
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
      <TouchableOpacity style={{ ...styles.cardContainer, width: windowWidth * 0.45, backgroundColor: bgColor }} 
        activeOpacity={0.5}
        onPress={() => navigation.navigate('PokemonScreen', {
          singlePokemon: pokemon,
          color: bgColor
        })}
      >
        <View style={{ marginLeft: 14, marginTop: 24 }}>
          <Text style={styles.pokemonTitle}>{capitalizeFirstLetter(pokemon.name)}</Text>
          <View style={{ marginTop: 12 }}>
            {pokemon.types.map(type => (
              <View>
                <View style={{ ...styles.typeContainer, marginBottom: 8, alignSelf: 'flex-start' }}>
                  <Text style={styles.typeTitle}>{capitalizeFirstLetter(type)}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.pokeContainer}>
          <Image
            source={require('../assets/pokedex/pokebola-blanca.png')}
            style={styles.pokemonBackImage}
          />
        </View>
      </TouchableOpacity>
      <FadeInImage
        uri={pokemon.image}
        style={styles.pokemonImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  cardContainer: {
    position: 'relative',
    borderRadius: 20,
    marginVertical: 4,
    height: 143,
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
    fontSize: 16,
    fontFamily: 'Flexo',
    color: 'white',
  },
  typeContainer: {
    paddingTop: 5,
    paddingHorizontal: 16,
    paddingBottom: 4,
    borderRadius: 12,
    backgroundColor: '#FFFFFF4D',
  },
  typeTitle: {
    fontSize: 12,
    fontFamily: 'Flexo',
    color: 'white',
  },
  pokeContainer: {
    overflow: 'hidden',
    opacity: 0.3,
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 106,
    height: 106,
    borderRadius: 10,
  },
  pokemonBackImage: {
    right: 0,
    bottom: 0,
    width: 106,
    height: 106,
  },
  pokemonImage: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    width: 88,
    height: 80,
  }
})
