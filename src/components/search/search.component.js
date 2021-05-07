
import React, {useEffect, useState} from 'react';
import MovieList from '../movieList/movieList.component';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const axios = require('axios');
import './search.styles.scss'

const Search=()=>{
  
  const [movie, setMovie]=useState('')
  const [movies,setMovies]=useState([])
  const [firstSearch, setSearch]=useState(true)
  const [countPage, setCountPage]=useState(1)
  const [pages, setPages]=useState(0)
  const [disabled, setDisabled]=useState(false)
  


  const fetchMovies=async (searchInput,countPage)=>{
   
    const response=  await  axios.get('https://www.omdbapi.com'
    ,{
        params:{
        apikey:'f9c009e8',
        s:searchInput,
        type:'movie',
        page:countPage
          }
    })

    if(!response.data.Search){
      setSearch(false)
      return []
    }
    
     
      setPages(Math.ceil(response.data.totalResults/10))
      return response.data.Search
 
  }
  
  const changeInput= (event)=>{

      event.preventDefault()

     }      


  const handleNextClick=(e)=>{

    e.preventDefault()  
      setClicked(clicked=>clicked+=1)
      setCountPage(countPage=>countPage+=1)
  }
  useEffect(()=>{

    fetchMovies(movie, countPage)  
    .then(result=>
      {if (result.length===0){
        setSearch(true)
      }setMovies([...result])
      })
  }, [countPage, movie])


useEffect(()=>{
  if(countPage===pages){
    setDisabled(disabled=>!disabled)
  }else{
    setDisabled(false)
  }
},[countPage])

const handlePrevClick=()=>{ 
  setCountPage(countPage=>countPage-1)
}

  return (
  <div>
    <Form className="pt-5 pb-5" onSubmit={changeInput}>
    <Form.Group controlId="formSearch">
    
      <Form.Label><h3>Movie Title:</h3></Form.Label>      
        <Form.Control type="search" placeholder="Search for a movie here..."  value={movie} onChange={(e)=>setMovie(e.target.value)} />
    </Form.Group>

        <Form.Group controlId="formButton" className="pt-3">
        <Button variant="dark" type="submit">Search</Button> 
        </Form.Group>
    </Form>
      <MovieList movies={movies} firstSearch={firstSearch} />
     
        <div hidden={movies.length===0} className="pt-5">
        <ButtonGroup size="sm">
          <Button variant='dark'  onClick={handlePrevClick} disabled={countPage===1}>prev</Button>
            <p className="pageNumber">{countPage}</p>
          <Button variant='dark' onClick={handleNextClick} disabled={disabled}>next</Button>
          </ButtonGroup>
        </div>
        
  </div>
  )

}

export {Search as default}
