import React, { useState, useEffect } from 'react';
import { 
      BrowserRouter,
      Route,
      Switch
     } from 'react-router-dom';
import axios from 'axios';

import './css/index.css';

import Header from './components/ui/Header';
import Nav from './components/ui/Nav';
import SearchForm from './components/ui/SearchForm';
import CharactersContainer from './components/actors/CharactersContainer';
import NotFound from './components/ui/NotFound';
import NoResult from './components/ui/NoResult';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useState('');

  // used get breaking bad data and display on the app 
  // after CharacterContainer mounted on the DOM
  useEffect( () => {
    const fetch = async () => {
      setIsLoading(true);
      // used axios for fetch data from breaking bad API
      // stronger browser support than fetch API 
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // setState in useState hook after got data from breaking bad API
      setCharacters(result.data);
      setIsLoading(false);
    }
    fetch()
  }, [query])

  // declared function expression for cleaner and readable code
  const CharactersRender = () => (
    <CharactersContainer
      isLoading={ isLoading }
      characters={ characters }
    />
  )

  return (
    <div className="container">
    <BrowserRouter>
      <Header getQueryValue={ ( query ) => setQuery( query ) } />
      <SearchForm getQueryValue={ ( query ) => setQuery( query ) } />
      <Nav getQueryValue={ ( query ) => setQuery( query ) } />
      
      <Switch>
        {/* if search value is not match the data, then render no result component
            else render CharacterContainer component */}
        <Route exact path="/" render={ ()=>
          ( query !== '' & characters.length < 1 )
          ? <NoResult />
          : CharactersRender()
      } />
        <Route exact path="/jesse" render={ ()=> CharactersRender() } />
        <Route exact path="/gustavo" render={ ()=> CharactersRender() } />
        <Route exact path="/skinny" render={ ()=> CharactersRender() } />

        {/* if url path does not match any of above, render 404 page component */}
        <Route component={NotFound} />
      </Switch>
      
    </BrowserRouter>
    </div>
  );
}

export default App;