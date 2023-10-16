import { Link, useParams } from "react-router-dom";
import usePokemonDetails from "../../Hooks/usePokemonsDetails";
import './PokemonDetails.css'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

function PokemonDetails({pokemonName}){

    const {id} = useParams();
    const {pokemon} = usePokemonDetails(id,pokemonName);
    console.log(pokemon)

    return (
        <>
        {

         !pokemonName?<div className="pokemon-back"><Link to={'/'}><MdOutlineArrowBackIosNew/></Link></div>:""
        }
        {pokemon.name?

            <div className="pokemon-details-wrapper">
            
            <div className="pokemon-img"><img  src={pokemon.image} /></div>
            <div className="pokemon-info">

                <h1 className="pokemon-name">{pokemon.name}</h1>
                <div className="pokemon-height-weight">
                    <div>height: {pokemon.height}</div>
                    <div>weight: {pokemon.weight}</div> 
                </div>
                <div className="pokemon-types">
                    <div>Type of pokemon:</div>
                    {
                        pokemon.types && pokemon.types.map((t, i)=><div key={i}>{t}</div>)
                    }
                </div>
                {
                    pokemon.similarPokemons && 
                    <div>
                    
                        <h3  className="pokemon-name">more {pokemon.types[0]} type pokemons</h3>
                        <ul className="pokemon-type-list">
                        {
                            pokemon.similarPokemons.map((p,i)=><li key={i}>{p.pokemon.name}</li>)
                        }
                    </ul>
                </div>
                }
            </div>
           
        
        </div>:<h2>searching....</h2>
        }
        </>
    )
}

export default PokemonDetails;