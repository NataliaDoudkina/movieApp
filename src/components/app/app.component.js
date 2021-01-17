import React, {useEffect, useReducer} from "react";
import Header from '../header/header.component'
import Search from '../search/search.component'
import NominationList from '../nominationList/nominationList.component'
import MoviesContext from '../../context/movies-context'
import moviesReducer from '../../reducers/nominationList'
import { Container, Row, Col } from 'react-bootstrap';

const App=()=> {

    const [nominatedMovies, dispatch]=useReducer(moviesReducer,[])  
    
    useEffect(()=>{
        const nominatedMovies=JSON.parse(localStorage.getItem('movies'))
        if(nominatedMovies){
            dispatch({
                type:'POPULATE_MOVIES', nominatedMovies
            })
        }
    }, [])
 
    useEffect(()=>{
        localStorage.setItem('movies', JSON.stringify(nominatedMovies))
    },[nominatedMovies])


    return (
      <MoviesContext.Provider value={{nominatedMovies, dispatch}}>   
      <Header />
      <Container>
        <Row>
            <Col md={4}>
                <Search />
            </Col>            
            <Col md={{ span: 4, offset: 3 }} className="pt-4">          
                <NominationList/>               
            </Col>
        </Row>
      </Container>
      </MoviesContext.Provider>);
  }

  export {App as default}