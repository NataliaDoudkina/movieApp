import React, {useContext} from 'react';
import NominatedMovie from '../nominatedMovie/nominatedMovie.component'
import MoviesContext from '../../context/movies-context'
import './nominationList.styles.scss'

const NominationList=()=>{
   const {nominatedMovies}=useContext(MoviesContext)
   
   if(nominatedMovies.length>0){
    return (
      <div className="nominationList">
      <h3>My Nominations:</h3>
      {nominatedMovies.map(movie=>(
          <NominatedMovie
          key={movie.id}
          movie={movie}
                 />
        )) 
      }
        </div>
      ) 
   }else{
     return (<div></div>)
   }
    
}

export {NominationList as default}