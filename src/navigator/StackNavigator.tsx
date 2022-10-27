import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SinglePokemon } from '../interfaces/pokemonInterfaces';
import { SearchScreen } from '../screens/SearchScreen';


//Type of args to each screen
export type RootStackParams = {
  HomeScreen    : undefined,
  PokemonScreen : {
    singlePokemon: SinglePokemon,
    color: string,
  }
}

export const StackNavigator = () => {

  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        headerShown: false,
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,
          elevation: 13,
          backgroundColor: 'red'
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}

export const SearchStackNavigator = () => {

  const SearchStack = createStackNavigator<RootStackParams>();

  return (
    <SearchStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        headerShown: false,
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,
          elevation: 13,
          backgroundColor: 'red'
        },
      }}
    >
      <SearchStack.Screen name="HomeScreen" component={SearchScreen} />
      <SearchStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </SearchStack.Navigator>
  );
}

export const AccountStackNavigator = () => {
  return <></>
}
