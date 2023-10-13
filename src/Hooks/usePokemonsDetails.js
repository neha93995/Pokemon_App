import axios from 'axios';
import { useEffect, useState } from 'react';

function usePokemonDetails(id){
 
    const [pokemon, setPokemon] = useState({});
    
    
    async function downloadPokemon(){

        const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonOfSameType = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types[0].type.name}`); // this downloads list of 20 pokemons
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name),
            similarPokemons:pokemonOfSameType.data.pokemon.slice(0,5)
            
        });
       
    }
    
    
    useEffect(()=>{
        downloadPokemon();
        
    },[])
    
    return {pokemon} 
}

export default usePokemonDetails;