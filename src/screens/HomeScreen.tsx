import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PokeBackground } from '../components/PokeBackground';
import { generalStyles } from '../theme/styles';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { SinglePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const {singlePokemonList, loadPokemons} = usePokemonPaginated();
  
  const _renderItem = (item:SinglePokemon) => {
    return (
      <PokemonCard pokemon={item}/>
    )
  }

  return (
    <PokeBackground>
      <Icon style={styles.arrowBack} name='arrow-back' color='#696869' size={25} />
      <Icon style={styles.list} name='list' color='#696869' size={25} />
      <View style={{position: 'absolute'}}>
        <Text style={[styles.textHeader, generalStyles.globalMargin]}>
          Pokedex
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={singlePokemonList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => _renderItem(item)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={(
            <Loading />
          )}
        />
      </View>
      <Icon style={styles.options} name='options' color='white' size={25} />
    </PokeBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: -25
  },
  textHeader: {
    color: '#35353A',
    fontWeight: '400',
    fontFamily: 'Flexo',
    fontSize: 24,
    marginTop: 70
  },
  arrowBack: {
    ...generalStyles.globalMargin,
    position: 'absolute',
    top: 36,
  },
  list: {
    ...generalStyles.globalMargin,
    position: 'absolute',
    top: 36,
    right: 0
  },
  options: {
    ...generalStyles.globalMargin,
    position: 'absolute',
    bottom: 72,
    right: 0,
    padding: 16,
    backgroundColor: '#7076C9',
    borderRadius: 30
  },
})
