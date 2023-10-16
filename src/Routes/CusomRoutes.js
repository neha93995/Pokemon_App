import {Routes, Route} from "react-router-dom";
import Pokedex from "../Component/Pokedex/Pokedex";
import PokemonDetails from "../Component/PokemonDetails/PokemonDetails";

function CustomRoutes(){

    return (
        <>
            <Routes>
            <Route path='/Pokemon_App' element={<Pokedex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>

        </Routes>
        </>
    )
}


export default CustomRoutes;