
import React,{useState, useContext} from 'react';
import Movie from '../movie/movie.components'
import MoviesContext from '../../context/movies-context'


 const MovieList=(props)=>{
console.log('first search is '+props.firstSearch)
    const {nominatedMovies}=useContext(MoviesContext)

        if(props.movies.length>0){
            for(let movie of props.movies){
                const findMovie=nominatedMovies.some(el=>{
                    return el.id===movie.imdbID
    })   
        if (findMovie){
            movie.disabled=true
    }else{
        movie.disabled=false
    }
 }
         return props.movies.map(movie=>(
            <Movie
            key={movie.id}
            movie={movie}            
             />
          ))
    }else if(!props.firstSearch){
        return(
            <div>Movie not found!</div>
        )
    }else{
        return(<div></div>
        )
    }  
}
export {MovieList as default}