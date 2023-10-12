import {useEffect, useState} from 'react'
import axios from 'axios';
import './pokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons(){
        const response = await axios.get(pokedexUrl); // this downloads list of 20 pokemons
        const pokemonResult = response.data.results; // we get the  array of pokemons 


        // iterating over the array of pokemons and using their url, to create an array of promisees
        //that will download those 20 pokemons
        const PokemonResultPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url));

        // passing that promise array to axios.all 
        const pokemonData = await axios.all(PokemonResultPromise); // when all promises are fullfilled then programms goes ahead

        console.log(pokemonData);

        // now iterate on the data of each pokemon, and extract id, name, image, types
        const res= pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            console.log(pokemon);
            return {
                id:pokemon.id,
                name:pokemon.name, 
                image:(pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                types:pokemon.types
            }
        });
        console.log(res);
        setPokemonList(res)


        setTimeout(()=>{
            setIsLoading(false);

        },2000)
    }

    useEffect(() => {
        downloadPokemons();
    }, []);

    return(
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-wrapper'>
                {
                    (isLoading)?'Loading...':
                    pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
                }
            </div>
            <div className='controls'>
                <button>Prev</button>
                <button>Next</button>
            </div>

        </div>
    )
}

export default PokemonList;