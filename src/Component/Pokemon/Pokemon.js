import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon ({name, image, id})
{
    // const n = name;
    return (
        <div className='pokemon-card'>
            <h3>{name.toUpperCase()}</h3>
            <div className='pokemon'>
                <Link to={`/pokemon/${id}`}>
                    <div><img className='pokemon-image' src={image} /></div>
                </Link>
            </div>
        </div>
    )
}

export default Pokemon;