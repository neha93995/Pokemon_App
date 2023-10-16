import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('');
    
    return(
        <div className='pokedex-wrapper' >

            <h1 className='pokedex-heading'>Pokedex</h1>
            <Search updateSearchTerm={setSearchTerm} />
            {
                (!searchTerm)? <PokemonList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>
            }
            
        </div>
    )
}

export default Pokedex;
