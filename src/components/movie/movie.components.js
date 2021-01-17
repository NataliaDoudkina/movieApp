import React, { useContext } from 'react';
import MoviesContext from '../../context/movies-context'
import Button from 'react-bootstrap/Button';



const Movie=(props)=>{

const {dispatch, nominatedMovies}=useContext(MoviesContext)

const handleCLick=(e)=>{
    
  if(nominatedMovies.length>=5){
      alert('You can only add 5 movies to the list')
  }

    e.preventDefault()    
      dispatch({
        type:'ADD_MOVIE', movie:props.movie
    })
}
    return(
        <div>
          <p>{props.movie.Title}: {props.movie.Year}
          <div>
          <Button size="sm" variant="success" onClick={handleCLick} disabled={props.movie.disabled} className='movieButton'>
          NOMINATE
          </Button>
          </div> </p>
        </div>
        )}

export {Movie as default}