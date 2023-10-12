import {useEffect, useState} from 'react'
import axios from 'axios';
import './pokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pokedexUrl = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons(){
        const response = await axios.get(pokedexUrl);
        const pokemonResult = response.data.results;

        const PokemonResultPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url));

        const pokemonData = await axios.all(PokemonResultPromise); // when all promises are fullfilled then programms goes ahead

        console.log(pokemonData);

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
        <div className='pokemon-list-wraper'>
            <h3>Pokemon List</h3>
            {
                (isLoading)?'Loading...':
                pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
            }

        </div>
    )
}

export default PokemonList;