import { useState } from 'react';
import './Search.css';
import useDebounce from '../../Hooks/useDebounce';

function Search({updateSearchTerm})
{

    const debouncedCallBack  = useDebounce((e)=> {console.log(e);updateSearchTerm(e.target.value)});
    return (
        <div className='search-wrapper'>
            <input type='text' 
            id="pokemonNameSearch" 
            placeholder='pokemon name....' 
            onChange={(e)=>debouncedCallBack(e,'123')}/>
        </div>
    )
}

export default Search;