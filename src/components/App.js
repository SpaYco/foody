import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import '../App.css';
import NavBar from './NavBar';
import RecipeDetails from './RecipeDetails';

const App = () => (
  <div>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/show/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
