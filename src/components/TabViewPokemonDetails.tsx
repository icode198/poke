import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Route, SceneMap, TabView } from 'react-native-tab-view'
import { PokemonDetail } from '../interfaces/pokemonInterfaces';
import { MovesTab } from './TabViewPokemon/MovesTab';
import { SpritesTab } from './TabViewPokemon/SpritesTab';


interface Props {
  pokemon: PokemonDetail,
  color: string,
}

type NavigationStates<T extends Route> = {
    index: number;
    routes: T[];
}

const routes = [
  {key: 'first',  title: 'Sprites'  },
  {key: 'second', title: 'Moves' }
]


export const TabViewPokemonDetails = ({pokemon, color}:Props) => {

  const [index, setIndex] = useState(0);

  const FirstRoute = () => (
    <SpritesTab pokemon={pokemon} color={color} />
  );

  const SecondRoute = () => (
    <MovesTab pokemon={pokemon} color={color} />
  );

  const _renderTabBar = (navigationState:NavigationStates<any>) => {
    return(
      <View style={styles.tabBarHeader}>
      {
        routes.map(({key, title}, i) => (
          <TouchableOpacity key={key} onPress={() => setIndex(i)}>
            <Text style={{...styles.tabBarTitle, color: color}}>{title}</Text>
            <Text style={{fontSize: 20, bottom: 10, color: (i === index) ? color : '#bdbdbd'}}>______</Text>
          </TouchableOpacity>
        ))
      }
      </View>
    )
  }

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={({ navigationState }) => _renderTabBar(navigationState)}
        onIndexChange={setIndex}
        showPageIndicator={true}
        initialLayout={{ width: 150 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    //backgroundColor: 'red'
  },
  tabBarHeader: {
    justifyContent: 'space-around', 
    flexDirection: 'row', 
    height: 50, 
    alignItems: 'center'
  },
  tabBarTitle: {
    fontSize: 18, 
    fontFamily: 'Pokemon-Solid',
    color: 'black'
  },
  
})
