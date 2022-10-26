import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResPaginated, Result, SinglePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  //First pokemons (40) block
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  //Next request
  const loadPokemons = async() => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonResPaginated>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  }

  //To build information about single pokemon 
  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SinglePokemon[] = pokemonList.map(({name, url}) => {
      //Stract info from: https://pokeapi.co/api/v2/pokemon/25/
      let urlParts = url.split('/');
      let id = urlParts[urlParts.length - 2];
      let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      //console.log('URL Url/Id/Picture', {image});
      return { id, name, image }
    });

    //Set state with old and new pokemons (prev and next)
    setSinglePokemonList([...singlePokemonList, ...newPokemonList]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    isLoading,
    loadPokemons,
    singlePokemonList
  }


}

