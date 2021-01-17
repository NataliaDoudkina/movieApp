
const moviesReducer=(state,action)=>{
    switch(action.type){
        case 'POPULATE_MOVIES':
            return action.nominatedMovies
            case 'ADD_MOVIE':
                if(state.length<5){
                    return [...state,{
                        title:action.movie.Title,
                        year:action.movie.Year,
                        id:action.movie.imdbID,
                        
                    }]
                }
               
                case 'REMOVE_MOVIE':
                    
                        return state.filter(movie=>movie.id!==action.id)
                               
        default:
            return state
    }
}
export {moviesReducer as default}