import { Link, useParams } from "react-router-dom";
import usePokemonDetails from "../../Hooks/usePokemonsDetails";

function PokemonDetails(){

    const {id} = useParams();
    const {pokemon} = usePokemonDetails(id);

    return (
        <>
        <Link to={'/'}>back</Link>
        <div className="pokemon-details-wrapper">
            
            <div className="pokemon-name">name: {pokemon.name}</div>
            <img className="pokemon-image" src={pokemon.image} />
            <div>height: {pokemon.height}</div>
            <div>weight: {pokemon.weight}</div>
            <div className="pokemon-types">
                {
                    pokemon.types && pokemon.types.map((t, i)=><div key={i}>{t}</div>)
                }
            </div>
            {
                pokemon.similarPokemons && 
                <div>
                more {pokemon.types[0]} type pokemons
                <ul>
                    {
                        pokemon.similarPokemons.map((p,i)=><li key={i}>{p.pokemon.name}</li>)
                    }
                </ul>
            </div>
            }
           
        
        </div>
        </>
    )
}

export default PokemonDetails;