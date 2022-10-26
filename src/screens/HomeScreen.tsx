import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { PokeBackground } from '../components/PokeBackground';
import { generalStyles } from '../theme/styles';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { SinglePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';


export const HomeScreen = () => {

  const {singlePokemonList, loadPokemons} = usePokemonPaginated();
  //console.log('Pokemons Paginated', {singlePokemonList});
  
  const _renderItem = (item:SinglePokemon) => {
    return (
      <PokemonCard pokemon={item}/>
    )
  }

  return (
    <PokeBackground>
      <View style={{position: 'absolute'}}>
        <Text style={[styles.textHeader, generalStyles.globalMargin]}>
          RN Pokedex
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={singlePokemonList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => _renderItem(item)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={(
            <Loading />
          )}
        />
      </View>
    </PokeBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white', 
    paddingHorizontal: 10,
    fontWeight: '400',
    fontFamily: 'Pokemon-Hollow',
    fontSize: 40, 
    marginTop: 125
  }
})
