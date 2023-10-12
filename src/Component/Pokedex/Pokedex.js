import Search from "../Search/Search";
import './pokedex.css';

function Pokedex(){

    return(
        <div className='pokedex-wrapper' >
            <h1 className='pokedex-heading'>Pokedex</h1>
            <Search />
        </div>
    )
}

export default Pokedex;