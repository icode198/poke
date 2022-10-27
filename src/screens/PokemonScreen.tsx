import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/StackNavigator'
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { PokemonDetails } from '../components/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({route, navigation}:Props) => {
  const { height:windowHeight } =  Dimensions.get('window');
  const  {singlePokemon:pokemon, color}= route.params;
  const {isLoading, pokemonDetail} = usePokemonDetail(pokemon.id);
  
  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <View style={{...styles.firstBox, backgroundColor: color, height: windowHeight * 0.50}}>
        <View style={{height: 60}}>
          <TouchableOpacity activeOpacity={0.2} style={styles.backButtonOpacity}
            onPress={() => navigation.pop()}
          >
            <Icon
              name='arrow-back-outline'
              color={'white'}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.pokemonName}>{'#' + pokemon.id}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.pokeBackground}
            source={require('../assets/pokedex/pokebola-blanca.png')}
          />
          <FadeInImage
            uri={pokemon.image}
            style={styles.pokemonImage}
          />
        </View>
      </View>
      <View style={{...styles.secondBox, height: windowHeight * 0.50}}>
        { 
          (isLoading) ?
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <ActivityIndicator 
              color={color}
              size={80}
            />
          </View> :
          <PokemonDetails pokemon={pokemonDetail} color={color} />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  firstBox: {
    zIndex: 999,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  backButtonOpacity: {
    position: 'absolute',
    marginTop: 10,
  },
  pokemonName: {
    fontSize: 35,
    fontFamily: 'FingerPaint-Regular',
    color: 'white',
    marginVertical: 10,
  },
  pokeBackground: {
    width: 250,
    top: 25,
    height: 250,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 300, 
    height: 300,
    bottom: -60,
    position: 'absolute',
  },
  secondBox: {
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    backgroundColor: 'white'
  }
})
