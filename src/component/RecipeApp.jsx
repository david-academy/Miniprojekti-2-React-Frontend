import React, { Component } from 'react';
import ListRecipesComponent from "./ListRecipesComponent";

class RecipeApp extends Component {
    render() {
        return (<>
        <h1>Recipe Application</h1>
        <ListRecipesComponent/>
            </>
        )
    }
}

export default RecipeApp