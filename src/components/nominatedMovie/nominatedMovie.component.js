import React, { useContext } from 'react';
import MoviesContext from '../../context/movies-context'
import Button from 'react-bootstrap/Button';

const NominatedMovie=({movie})=>{
 
    const {dispatch}=useContext(MoviesContext)
  

    const handleClick=()=>{
        dispatch({type:'REMOVE_MOVIE', id:movie.id})
}
    return(
        <div>
            <p>{movie.title}: {movie.year}
            <div>
            <Button size="sm" variant='danger' onClick={handleClick}>DELETE
            </Button>
            </div>
</p>
        </div>
    )}

export {NominatedMovie as default}