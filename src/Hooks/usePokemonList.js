import axios from 'axios';
import { useEffect, useState } from 'react'


function usePokemonList(type) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: "",
        prevUrl: "",
    })

    async function downloadPokemons() {


        setPokemonListState((state) => ({ ...state, isLoading: true }));
        const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons
        const pokemonResult = response.data.results; // we get the  array of pokemons 

        setPokemonListState((state) => ({ ...state, nextUrl: response.data.next, prevUrl: response.data.previous }))


        // iterating over the array of pokemons and using their url, to create an array of promisees
        //that will download those 20 pokemons

        const PokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
        // passing that promise array to axios.all 
        const pokemonData = await axios.all(PokemonResultPromise); // when all promises are fullfilled then programms goes ahead




        // now iterate on the data of each pokemon, and extract id, name, image, types
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types,
                type: ""
            }
        });

        setPokemonListState((state) => ({ ...state, pokemonList: res, isLoading: false }));


    }


    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);


    return { pokemonListState, setPokemonListState }


}

export default usePokemonList;