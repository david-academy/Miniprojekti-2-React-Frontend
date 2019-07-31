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
                    <Route path="/recipes" exact component={ListRecipesComponent} />
                    <Route path="/recipes/:id" component={RecipeComponent} />

        {/*<ListRecipesComponent/>*/}
                </Switch>
            </>
            </Router>
        )
    }
}

export default RecipeApp