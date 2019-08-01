import React, { Component } from 'react';
import ListRecipesComponent from "./ListRecipesComponent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipeComponent from './RecipeComponent';

class RecipeApp extends Component {
    render() {
        return (
            <Router>
            <>
                <h1>Recipe Application</h1>
                <Switch>
                    <Route path="/" exact component={ListRecipesComponent} />
                    <Route path="/reseptit" exact component={ListRecipesComponent} />
                    <Route path="/reseptit/:id" component={RecipeComponent} />
                </Switch>
            </>
            </Router>
        )
    }
}

export default RecipeApp