import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResPaginated, PokemonDetail, Result, SinglePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon[]>([
    // {
    //   id: "1",
    //   name: "bulbasaur",
    //   image: "../../assets/001.png",
    //   types: ["grass", "poison"],
    // },
    // {
    //   id: "4",
    //   name: "charmander",
    //   image: "../../assets/004.png",
    //   types: ["fire"],
    // },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

  //Next request
  const loadPokemons = async() => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonResPaginated>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  }

  //To build information about single pokemon
  const mapPokemonList = async(pokemonList: Result[]) => {
    const newPokemonList: SinglePokemon[] = [];
    for (let {name, url} of pokemonList) {
      let urlParts = url.split('/');
      let id = urlParts[urlParts.length - 2];
      let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      const resp = await pokemonApi.get<PokemonDetail>(url);
      const types = resp.data.types.map(e => e.type.name);

      newPokemonList.push({ id, name, image, types });
    }

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
